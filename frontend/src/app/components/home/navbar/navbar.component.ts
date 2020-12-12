import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() showNavbarEmitter = new EventEmitter<boolean>();

  constructor(private localStorage: LocalStorageService) {}

  ngOnInit(): void {}

  onLogOutClicked(): void {
    this.localStorage.clearToken();
  }

  showNavbar(): void {
    this.showNavbarEmitter.emit(true);
  }

  hideNavbar(): void {
    this.showNavbarEmitter.emit(false);
  }
}
