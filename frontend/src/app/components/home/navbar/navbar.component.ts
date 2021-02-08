import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentUser, Notification, User } from 'src/app/classes/user';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { ShareService } from 'src/app/services/share/share.service';
import { UserService } from 'src/app/services/user/user.service';
import { SocketService } from 'src/app/services/web-socket/socket.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Output() showNavbarEmitter = new EventEmitter<boolean>();
  @Input() showNav: boolean;
  currentUser: CurrentUser;
  shouldShowGuide: boolean;
  shouldShowNotifModal: boolean;
  private subscription: Subscription;

  constructor(
    private localStorage: LocalStorageService,
    private userService: UserService,
    private socketService: SocketService,
    private shareService: ShareService
  ) {}

  ngOnInit(): void {
    this.subscription = this.userService
      .getUserObservable()
      .subscribe((user: User) => {
        if (user) {
          this.currentUser = user.user;
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onLogOutClicked(): void {
    const token = this.localStorage.getToken();
    this.localStorage.clearToken();
    this.socketService.emit('onLogOut', token);
  }

  showNavbar(): void {
    this.showNavbarEmitter.emit(true);
  }

  hideNavbar(): void {
    this.showNavbarEmitter.emit(false);
  }

  toggleGuideModal(): void {
    this.shouldShowGuide = !this.shouldShowGuide;
  }

  getNotificationTitle(): string {
    let title = `${this.currentUser.notifications.length} notification`;
    return this.currentUser.notifications.length > 1 ? title + 's' : title;
  }

  showNotificationModal(): void {
    this.shouldShowNotifModal = true;
  }

  removeNotification(notif: Notification): void {
    this.shareService.removeNotification(notif);
  }

  acceptNotification(notif: Notification): void {
    this.shareService.acceptNotification(notif);
  }

  onModalClicked(event: Event): void {
    // click only parent, not children
    if (event.target !== event.currentTarget) {
      return;
    }

    this.shouldShowGuide = false;
    this.shouldShowNotifModal = false;
  }
}
