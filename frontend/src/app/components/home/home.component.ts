import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentUser } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  showNavbar: boolean;
  user: CurrentUser;
  private userSubscription: Subscription;

  constructor(private userService: UserService) {}

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
