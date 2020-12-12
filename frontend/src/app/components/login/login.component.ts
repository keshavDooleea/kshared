import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CurrentUser, User } from 'src/app/classes/user';
import { validateLength } from 'src/app/classes/validator';
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
    private router: Router
  ) {
    this.checkUser();
    this.initialiseRegisterForm();
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

    this.loginForm = new FormGroup({
      loginUsername: new FormControl(
        '',
        Validators.compose([Validators.required, validateLength])
      ),
      loginPassword: new FormControl(
        '',
        Validators.compose([Validators.required, validateLength])
      ),
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

  private handleRegistrationResponse(data: ServerResponse): void {
    this.serverResponse = data;

    if (data.status === 200) {
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
        dateCreated: data.dateCreated,
      };
      const user = new User(currentUser);
      this.userService.setUser(user);
      this.localStorage.saveToken();
      this.router.navigateByUrl('/home');
    }
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
}
