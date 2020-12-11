import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isRegister: boolean;
  shouldShowModal: boolean;

  constructor() {
    this.isRegister = false;
    this.shouldShowModal = false;
  }

  ngOnInit(): void {}

  onCancelClicked(): void {
    this.isRegister = false;
  }

  onRegisterClicked(): void {
    this.isRegister = false;
  }

  onSignUpClicked(): void {
    this.isRegister = true;
  }

  toggleModal(): void {
    this.shouldShowModal = !this.shouldShowModal;
  }
}
