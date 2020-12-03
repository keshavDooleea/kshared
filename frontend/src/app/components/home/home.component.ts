import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showNavbar: boolean;
  constructor() {}

  ngOnInit(): void {}

  onNavbarChanged(showNav: boolean): void {
    this.showNavbar = showNav;
  }

  showNav(): void {
    this.showNavbar = true;
  }

  hideNav(): void {
    this.showNavbar = false;
  }
}
