import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { validateLength } from 'src/app/classes/validator';
import { SocketService } from 'src/app/services/web-socket/socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  isRegister: boolean;
  shouldShowModal: boolean;
  registerForm: FormGroup;
  showExistsUser: boolean;
  showRegisteredMessage: boolean;
  private socketSubscription: Subscription;

  constructor(private socket: SocketService) {
    this.initialiseRegisterForm();
  }

  initialiseRegisterForm(): void {
    this.showExistsUser = false;
    this.isRegister = false;
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

  ngOnDestroy(): void {
    this.socketSubscription.unsubscribe();
  }

  onCancelClicked(): void {
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

    this.socketSubscription = this.socket
      .listen('registrationResponse')
      .subscribe((data) => {
        this.handleRegistrationResponse(data);
      });
  }

  onSignUpClicked(): void {
    this.isRegister = true;
  }

  onLoginClicked(): void {}

  toggleModal(): void {
    this.shouldShowModal = !this.shouldShowModal;
  }

  private handleRegistrationResponse(data: string): void {
    console.log(`Registration response: ${data}`);

    if (data === 'Exists') {
      this.showExistsUser = true;
    } else if (data === 'Registered') {
      this.showExistsUser = false;
      this.showRegisteredMessage = true;

      // hide register - show login
      setTimeout(() => {
        this.initialiseRegisterForm();
      }, 500);

      // hide message
      setTimeout(() => {
        this.showRegisteredMessage = false;
      }, 2700);
    }
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
