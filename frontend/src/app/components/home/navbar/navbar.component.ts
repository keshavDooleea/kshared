import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentUser, User } from 'src/app/classes/user';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
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
  private subscription: Subscription;

  constructor(
    private localStorage: LocalStorageService,
    private userService: UserService,
    private socketService: SocketService
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

  onModalClicked(event: Event): void {
    // click only parent, not children
    if (event.target !== event.currentTarget) {
      return;
    }

    this.shouldShowGuide = false;
  }
}
