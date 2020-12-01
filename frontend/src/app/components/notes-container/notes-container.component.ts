import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss'],
})
export class NotesContainerComponent implements OnInit {
  textareaValue: string;

  constructor(private noteService: NotesService) {}

  ngOnInit(): void {}

  saveTextarea(): void {
    if (!this.textareaValue) {
      return;
    }

    this.noteService.addNote(this.textareaValue);
  }

  clearTextarea(): void {
    this.textareaValue = '';
  }
}
