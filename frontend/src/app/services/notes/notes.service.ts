import { Injectable } from '@angular/core';
import { Note } from '../../classes/Note';
import { UserService } from '../user/user.service';
import { SocketService } from '../web-socket/socket.service';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private noteArray: Note[];

  constructor(private socket: SocketService, private currentUser: UserService) {
    this.noteArray = [];
  }

  addNote(newText: string): void {
    const checkIfExists = (note: Note) => note.text === newText;

    // if exists, return to avoid duplicates
    if (this.noteArray.some(checkIfExists)) {
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
    console.log(this.noteArray);
    const index = this.noteArray.indexOf(note);
    this.noteArray.splice(index, 1);

    // save to server
    this.saveNote();
  }

  saveCurrentText(text: string): void {
    const socketData = {
      text,
      token: this.currentUser.getToken(),
    };
    this.socket.emit('updateText', socketData);
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
}
