import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Note } from '../../classes/Note';
import { UserService } from '../user/user.service';
import { SocketService } from '../web-socket/socket.service';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private noteArray: Note[];
  private noteSubscription: BehaviorSubject<Note[]>;

  constructor(private socket: SocketService, private currentUser: UserService) {
    this.noteArray = [];
    this.noteSubscription = new BehaviorSubject<Note[]>(this.noteArray);
  }

  getNotesObservable(): Observable<Note[]> {
    return this.noteSubscription.asObservable();
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
    });

    // save to server

    this.noteSubscription.next(this.noteArray);
  }

  deleteNote(note: Note): void {
    const index = this.noteArray.indexOf(note);
    this.noteArray.splice(index, 1);

    // save to server

    this.noteSubscription.next(this.noteArray);
  }

  saveCurrentText(text: string): void {
    const socketData = {
      token: this.currentUser.getToken(),
      text,
    };
    this.socket.emit('updateText', socketData);
  }
}
