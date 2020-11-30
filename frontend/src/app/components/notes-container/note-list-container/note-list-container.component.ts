import { Component, Input, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Note } from 'src/app/classes/Note';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-note-list-container',
  templateUrl: './note-list-container.component.html',
  styleUrls: ['./note-list-container.component.scss']
})
export class NoteListContainerComponent implements OnInit, OnDestroy {

  private noteSubscription: Subscription;
  noteList: Note[];

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.subscribeToNote();
  }

  ngOnDestroy(): void {
    this.noteSubscription.unsubscribe();
  }

  private subscribeToNote(): void {
    this.noteSubscription = this.noteService.getNotesObservable().subscribe((newList: Note[]) => {
      this.noteList = newList;
      console.log(this.noteList);
    });
  }
}
