import { Injectable } from '@angular/core';
import { Note } from '../../classes/Note';
import { UserService } from '../user/user.service';
import { SocketService } from '../web-socket/socket.service';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private currentText: string;
  private noteArray: Note[];

  constructor(private socket: SocketService, private currentUser: UserService) {
    this.noteArray = [];
  }

  deleteNote(note: Note): void {
    const index = this.noteArray.indexOf(note);
    this.noteArray.splice(index, 1);

    // save to server
    this.saveNote();
  }

  cleanEmptyNotes(): void {
    this.noteArray.forEach((note, index) => {
      if (note.text === '') {
        this.noteArray.splice(index, 1);
      }
    });
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

  addNewNote(text: string): void {
    const socketData = {
      token: this.currentUser.getToken(),
      text,
    };
    this.socket.emit('addNewNoteID', socketData);
  }

  updateCurrentNote(note: Note, text: string): void {
    const socketData = {
      text,
      noteID: note._id,
      token: this.currentUser.getToken(),
    };
    this.socket.emit('updateNote', socketData);
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
