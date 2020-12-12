import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentUser, User } from 'src/app/classes/user';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Output() showNavbarEmitter = new EventEmitter<boolean>();
  currentUser: CurrentUser;
  private subscription: Subscription;

  constructor(
    private localStorage: LocalStorageService,
    private userService: UserService
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
    this.localStorage.clearToken();
  }

  showNavbar(): void {
    this.showNavbarEmitter.emit(true);
  }

  hideNavbar(): void {
    this.showNavbarEmitter.emit(false);
  }
}
