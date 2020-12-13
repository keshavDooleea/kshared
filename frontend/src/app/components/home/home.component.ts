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
  shouldShowModal: boolean;
  private userSubscription: Subscription;

  constructor(
    private userService: UserService,
    private localStorage: LocalStorageService,
    private socketService: SocketService
  ) {}

  ngOnInit(): void {
    this.subscribeToUser();
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

  toggleModal(): void {
    this.shouldShowModal = !this.shouldShowModal;
  }

  onDeleteAccount(): void {
    const token = this.localStorage.getToken();
    this.localStorage.clearToken();
    this.socketService.emit('deleteAccount', token);
  }

  private subscribeToUser(): void {
    this.userSubscription = this.userService
      .getUserObservable()
      .subscribe((user) => {
        if (user) {
          this.user = user.user;
          console.log(this.user.dateAccCreated);
        }
      });
  }
}
