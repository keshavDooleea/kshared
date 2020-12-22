import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CurrentUser } from 'src/app/classes/user';
import { validateEmail, validateTextarea } from 'src/app/classes/validator';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { UserService } from 'src/app/services/user/user.service';
import { SocketService } from 'src/app/services/web-socket/socket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  showNavbar: boolean;
  user: CurrentUser;
  showDeleteModal: boolean;
  showFeedbackModal: boolean;
  emailForm: FormGroup;
  emailClass: string;
  private subscriptions: Subscription[] = [];

  constructor(
    private userService: UserService,
    private localStorage: LocalStorageService,
    private socketService: SocketService
  ) {}

  ngOnInit(): void {
    this.subscribeToUser();
    this.initialiseEmailForm();
    const token = this.localStorage.getToken();
    this.socketService.emit('enteredHome', token);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  private initialiseEmailForm(): void {
    this.emailForm = new FormGroup({
      emailAddress: new FormControl(
        '',
        Validators.compose([Validators.required, validateEmail])
      ),
      emailMessage: new FormControl(
        '',
        Validators.compose([Validators.required, validateTextarea])
      ),
    });
  }

  onNavbarChanged(showNav: boolean): void {
    this.showNavbar = showNav;
  }

  showNav(): void {
    this.showNavbar = true;
  }

  hideNav(): void {
    this.showNavbar = false;
  }

  toggleDeleteModal(): void {
    this.hideNav();
    this.showDeleteModal = !this.showDeleteModal;
  }

  toggleFeedbackModal(): void {
    this.hideNav();
    this.initialiseEmailForm();
    this.emailClass = 'show-email-btn';
    this.showFeedbackModal = !this.showFeedbackModal;
  }

  onModalClicked(event: Event): void {
    // click only parent, not children
    if (event.target !== event.currentTarget) {
      return;
    }

    this.showDeleteModal = false;
    this.showFeedbackModal = false;
  }

  onDeleteAccount(): void {
    const token = this.localStorage.getToken();
    this.socketService.emit('deleteAccount', token);
  }

  sendEmail(): void {
    if (this.emailForm.invalid) {
      return;
    }

    this.emailClass = 'show-spinner';
    const data = {
      email: this.emailAdd,
      message: this.emailMessage,
      username: this.userService.getUser().user.username,
    };

    this.socketService.emit('sendEmail', data);
  }

  closeResponse(): void {
    this.emailClass = 'show-email-btn';
  }

  private subscribeToUser(): void {
    this.subscriptions.push(
      this.userService.getUserObservable().subscribe((user) => {
        if (user) {
          this.user = user.user;
        }
      })
    );

    this.subscriptions.push(
      this.socketService
        .listen('emailResponse')
        .subscribe((response: string) => {
          if (response === '200') {
            this.emailClass = 'show-success-response';
          } else {
            this.emailClass = 'show-error-response';
          }
        })
    );
  }

  get emailAdd(): string {
    return this.emailForm.get('emailAddress').value;
  }

  get emailMessage(): string {
    return this.emailForm.get('emailMessage').value;
  }
}
