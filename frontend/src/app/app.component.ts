import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SocketService } from 'src/app/services/web-socket/socket.service';
import { User } from './classes/user';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private socketSubscription: Subscription;

  constructor(
    private socketService: SocketService,
    private localStorage: LocalStorageService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.checkUser();
    this.onLogOut();
  }

  ngOnDestroy(): void {
    this.socketSubscription.unsubscribe();
  }

  private checkUser(): void {
    const token = this.localStorage.getToken();

    if (token) {
      // this.router.navigateByUrl('/home');
      this.socketService.emit('pageRefresh', token);
      this.socketSubscription = this.socketService
        .listen('initialLanding')
        .subscribe((data) => {
          const user = new User(data);
          this.userService.setUser(user);
        });

      this.socketSubscription = this.socketService
        .listen('deletedAccount')
        .subscribe(() => {
          this.localStorage.clearToken();
          console.log('CLEAARED');
        });
    }
  }

  private onLogOut(): void {
    this.socketSubscription = this.socketService
      .listen('appLogOut')
      .subscribe(() => {
        this.router.navigateByUrl('/login');
      });
  }
}
