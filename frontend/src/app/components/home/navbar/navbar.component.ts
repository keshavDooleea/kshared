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
import { FilesService } from 'src/app/services/files/files.service';
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
  private subscriptions: Subscription[] = [];

  constructor(
    private localStorage: LocalStorageService,
    private userService: UserService,
    private socketService: SocketService,
    private shareService: ShareService,
    private fileService: FilesService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.userService.getUserObservable().subscribe((user: User) => {
        if (user) {
          this.currentUser = user.user;
        }
      })
    );

    this.subscriptions.push(
      this.userService
        .getNotifObservable()
        .subscribe((notif: Notification[]) => {
          this.currentUser.notifications = notif;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
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

  getNotificationIcon(notif: Notification): string {
    if (notif.innerHTML) {
      const newIcon =
        notif.innerHTML.slice(0, 10) +
        'current-icon ' +
        notif.innerHTML.slice(10);
      return newIcon;
    } else {
      return `<i class="fas fa-sticky-note current-icon"></i>`;
    }
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
