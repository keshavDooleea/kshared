import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Note } from 'src/app/classes/Note';
import { NotesService} from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent implements OnInit {

  textareaValue: string;

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
  }

  saveTextarea(): void {
    this.noteService.addNote(this.textareaValue);
  }
}
