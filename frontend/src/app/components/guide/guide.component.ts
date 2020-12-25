import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss'],
})
export class GuideComponent implements OnInit {
  @Output() closeModalEmitter = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  closeModal(): void {
    this.closeModalEmitter.emit(true);
  }
}
