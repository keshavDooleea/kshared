import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-list-container',
  templateUrl: './note-list-container.component.html',
  styleUrls: ['./note-list-container.component.scss']
})
export class NoteListContainerComponent implements OnInit {

  isEmpty: boolean;

  constructor() { this.isEmpty = true;}

  ngOnInit(): void {
  }

}
