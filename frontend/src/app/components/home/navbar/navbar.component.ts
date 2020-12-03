import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() showNavbarEmitter = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onLogOutClicked(): void {
    console.log('Logged out clicked');
  }

  showNavbar(): void {
    this.showNavbarEmitter.emit(true);
  }

  hideNavbar(): void {
    this.showNavbarEmitter.emit(false);
  }
}
