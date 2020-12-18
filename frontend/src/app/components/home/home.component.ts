import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentUser } from 'src/app/classes/user';
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
  private userSubscription: Subscription;

  constructor(
    private userService: UserService,
    private localStorage: LocalStorageService,
    private socketService: SocketService
  ) {}

  ngOnInit(): void {
    this.subscribeToUser();
    this.socketService.listen('deletedAccount').subscribe(() => {
      this.localStorage.clearToken();
      console.log('CLEAARED');
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
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
    this.showDeleteModal = !this.showDeleteModal;
  }

  toggleFeedbackModal(): void {
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

  private subscribeToUser(): void {
    this.userSubscription = this.userService
      .getUserObservable()
      .subscribe((user) => {
        if (user) {
          this.user = user.user;
        }
      });
  }
}
