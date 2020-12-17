import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as confetti from 'canvas-confetti';
import { Subscription } from 'rxjs';
import { CurrentUser, User } from 'src/app/classes/user';
import { validatePassword, validateUsername } from 'src/app/classes/validator';
import { ServerResponse } from 'src/app/declarations/server-params';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { UserService } from 'src/app/services/user/user.service';
import { SocketService } from 'src/app/services/web-socket/socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  readonly stars = [1, 2, 3, 4, 5];
  isRegister: boolean;
  shouldShowModal: boolean;
  registerForm: FormGroup;
  loginForm: FormGroup;
  serverResponse: ServerResponse;
  showRegisteredMessage: boolean;
  private socketSubscription: Subscription;

  constructor(
    private socket: SocketService,
    private userService: UserService,
    private localStorage: LocalStorageService,
    private router: Router,
    private elementRef: ElementRef
  ) {
    this.checkUser();
    this.updateGlobalStars();
    this.initialiseRegisterForm();
    this.inialiseLoginForm();
  }

  private checkUser(): void {
    const token = this.localStorage.getToken();
    if (token) {
      this.router.navigate(['/home']);
    }
  }

  private initialiseRegisterForm(): void {
    this.isRegister = false;
    this.serverResponse = {} as ServerResponse;

    this.registerForm = new FormGroup({
      username: new FormControl(
        '',
        Validators.compose([Validators.required, validateUsername])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.required, validatePassword])
      ),
      confirmPassword: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
    });
  }

  private inialiseLoginForm(): void {
    this.isRegister = false;
    this.serverResponse = {} as ServerResponse;

    this.loginForm = new FormGroup({
      loginUsername: new FormControl(
        '',
        Validators.compose([Validators.required, validateUsername])
      ),
      loginPassword: new FormControl(
        '',
        Validators.compose([Validators.required, validatePassword])
      ),
    });
  }

  private updateGlobalStars(): void {
    this.socket.emit('getGlobalStars', {});

    this.socketSubscription = this.socket
      .listen('avgStars')
      .subscribe((starsAmount: number) => {
        this.fillStars(starsAmount);
      });
  }

  private fillStars(index: number): void {
    this.svgStars.forEach((star, i) => {
      if (i <= index - 1) {
        star.classList.add('light-star');
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.socketSubscription) {
      this.socketSubscription.unsubscribe();
    }
  }

  onCancelClicked(): void {
    this.initialiseRegisterForm();
  }

  onInputKeydown(): void {
    this.serverResponse = {} as ServerResponse;
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

  onLoginClicked(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const loginForm = {
      username: this.loginUsername,
      password: this.loginPassword,
    };

    this.socket.emit('newUserLogin', loginForm);

    this.socketSubscription = this.socket
      .listen('newLoginResponse')
      .subscribe((data) => {
        this.handleLoginResponse(data);
      });
  }

  toggleModal(): void {
    this.shouldShowModal = !this.shouldShowModal;
  }

  onModalClicked(event: Event): void {
    // click only parent, not children
    if (event.target !== event.currentTarget) {
      return;
    }

    this.shouldShowModal = false;
  }

  private handleRegistrationResponse(data: ServerResponse): void {
    this.serverResponse = data;

    if (data.status === 200) {
      this.throwConfetti();
      this.showRegisteredMessage = true;

      // hide register - show login
      setTimeout(() => {
        this.isRegister = false;
      }, 500);

      // hide message
      setTimeout(() => {
        this.showRegisteredMessage = false;
        this.initialiseRegisterForm();
      }, 2700);
    }
  }

  private handleLoginResponse(data: ServerResponse): void {
    this.serverResponse = data;

    if (data.status === 200) {
      const currentUser: CurrentUser = {
        id: data.id,
        username: data.username,
        token: data.token,
        dateAccCreated: data.dateAccCreated,
        currentText: data.currentText,
        noteList: data.noteList,
      };
      const user = new User(currentUser);
      console.log(user);
      this.userService.setUser(user);
      this.localStorage.saveToken();
      this.router.navigateByUrl('/home');
    }
  }

  private throwConfetti(): void {
    const colors = ['#bb0000', '#ffffff', '#ffff00'];

    confetti.create(undefined, { resize: true })({
      particleCount: 100,
      startVelocity: 55,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors,
    });

    confetti.create(undefined, { resize: true })({
      particleCount: 100,
      angle: 120,
      startVelocity: 55,
      spread: 55,
      origin: { x: 1 },
      colors,
    });
  }

  get loginUsername(): string {
    return this.loginForm.get('loginUsername').value;
  }

  get loginPassword(): string {
    return this.loginForm.get('loginPassword').value;
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

  get svgStars(): HTMLImageElement[] {
    return this.elementRef.nativeElement.querySelectorAll('.stars-span img');
  }
}
