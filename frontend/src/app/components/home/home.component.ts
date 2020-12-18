import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  private socketSubscription: Subscription;

  constructor(
    private userService: UserService,
    private localStorage: LocalStorageService,
    private socketService: SocketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscribeToUser();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.socketSubscription.unsubscribe();
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

    this.socketSubscription = this.socketService
      .listen('deletedAccount')
      .subscribe(() => {
        this.localStorage.clearToken();
        console.log('CLEAARED');
        this.router.navigateByUrl('/login');
      });
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
