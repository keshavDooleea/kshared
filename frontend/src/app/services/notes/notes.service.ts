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
      date: '31/08/20'
    });

    this.noteSubscription.next(this.noteArray);
  }
}
