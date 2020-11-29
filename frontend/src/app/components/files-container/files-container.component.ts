import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files-container',
  templateUrl: './files-container.component.html',
  styleUrls: ['./files-container.component.scss']
})
export class FilesContainerComponent implements OnInit {

  isEmpty: boolean;

  constructor() { this.isEmpty = false; }

  ngOnInit(): void {
  }

}
