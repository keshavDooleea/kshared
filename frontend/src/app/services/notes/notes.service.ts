import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Note} from "../../classes/Note"

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private noteArray: Note[];
  private noteSubscription: BehaviorSubject<Note[]>;

  constructor() {
    this.noteArray = [];
    this.noteSubscription = new BehaviorSubject<Note[]>(this.noteArray);
   }

   getNotesObservable(): Observable<Note[]> {
     return this.noteSubscription.asObservable();
   }

  addNote(newText: string): void {
    this.noteArray.push({
      text: newText,
      date: Date.now()
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
}
