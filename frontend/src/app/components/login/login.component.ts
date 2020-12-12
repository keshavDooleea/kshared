import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validateLength } from 'src/app/classes/validator';
import { SocketService } from 'src/app/services/web-socket/socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isRegister: boolean;
  shouldShowModal: boolean;
  registerForm: FormGroup;

  constructor(private socket: SocketService) {
    this.isRegister = false;
    this.shouldShowModal = false;

    this.initialiseRegisterForm();
  }

  initialiseRegisterForm(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(
        '',
        Validators.compose([Validators.required, validateLength])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.required, validateLength])
      ),
      confirmPassword: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
    });
  }

  ngOnInit(): void {}

  onCancelClicked(): void {
    this.isRegister = false;
    this.initialiseRegisterForm();
  }

  onRegisterClicked(): void {
    if (
      this.registerForm.invalid ||
      this.registerPassword !== this.registerConfirmPassword
    ) {
      return;
    }

    const registerForm = {
      username: this.registerUsername,
      password: this.registerPassword,
    };

    this.socket.emit('newRegistration', registerForm);

    // this.isRegister = false;
  }

  onSignUpClicked(): void {
    this.isRegister = true;
  }

  onLoginClicked(): void {}

  toggleModal(): void {
    this.shouldShowModal = !this.shouldShowModal;
  }

  get registerUsername(): string {
    return this.registerForm.get('username').value;
  }

  get registerPassword(): string {
    return this.registerForm.get('password').value;
  }

  get registerConfirmPassword(): string {
    return this.registerForm.get('confirmPassword').value;
  }
}
