import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Note } from '../../classes/Note';
import { TextareaType } from '../../classes/textarea';
import { UserService } from '../user/user.service';
import { SocketService } from '../web-socket/socket.service';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private currentText: string;
  private noteArray: Note[];
  private textareaSubject: Subject<TextareaType>;

  constructor(private socket: SocketService, private currentUser: UserService) {
    this.noteArray = [];
    this.textareaSubject = new Subject<TextareaType>();
  }

  getTextareaSubject(): Observable<TextareaType> {
    return this.textareaSubject.asObservable();
  }

  addNote(newText: string): void {
    const checkIfExists = (note: Note) => note.text === newText;

    if (!newText.trim()) {
      this.currentText = '';

      const subject: TextareaType = {
        showNewPlaceholder: false,
        text: this.currentText,
      };

      this.textareaSubject.next(subject);
      return;
    }

    // if exists, return to avoid duplicates
    if (this.noteArray.some(checkIfExists) || !newText) {
      return;
    }

    this.noteArray.push({
      text: newText,
      date: Date.now(),
      canShow: true,
      welcomeNote: false,
    });

    // sort by most recent first
    this.noteArray.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // save to server
    this.saveNote();
  }

  deleteNote(note: Note): void {
    const index = this.noteArray.indexOf(note);
    this.noteArray.splice(index, 1);

    // save to server
    this.saveNote();
  }

  saveCurrentText(text: string): void {
    this.currentText = !text.trim() ? '' : text;

    const socketData = {
      text: this.currentText,
      token: this.currentUser.getToken(),
    };
    this.socket.emit('updateText', socketData);
  }

  addNewNote(): void {
    this.addNote(this.currentText);
    this.currentText = '';
    this.saveCurrentText(this.currentText);

    const subject: TextareaType = {
      showNewPlaceholder: true,
      text: this.currentText,
    };

    this.textareaSubject.next(subject);
  }

  updateCurrentNote(text: string): void {
    const socketData = {
      text,
      token: this.currentUser.getToken(),
    };
    this.socket.emit('openNote', socketData);
  }

  private saveNote(): void {
    if (this.currentUser) {
      const socketData = {
        token: this.currentUser.getToken(),
        notes: this.noteArray,
      };
      this.socket.emit('saveNoteList', socketData);
    }
  }

  setNotes(newNote: Note[]): void {
    this.noteArray = newNote;
  }

  setCurrentText(newText: string): void {
    this.currentText = newText;
  }
}
