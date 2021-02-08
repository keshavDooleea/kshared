import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SocketService } from 'src/app/services/web-socket/socket.service';
import { Notification, User } from './classes/user';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { UserService } from './services/user/user.service';
import { ResizeService } from './services/window-resize/resize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(
    private socketService: SocketService,
    private localStorage: LocalStorageService,
    private router: Router,
    private userService: UserService,
    private resizeService: ResizeService
  ) {}

  ngOnInit(): void {
    this.getWindowSize();
    this.checkUser();
    this.onLogOut();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  @HostListener('window:resize', ['$event'])
  getWindowSize(event?: Event): void {
    const isWindows = window.innerWidth >= 650;
    this.resizeService.emitWindowSize(isWindows);
  }

  private checkUser(): void {
    const token = this.localStorage.getToken();

    if (token) {
      // this.router.navigateByUrl('/home');
      this.socketService.emit('pageRefresh', token);
      this.subscriptions.push(
        this.socketService.listen('initialLanding').subscribe((data) => {
          const user = new User(data);
          this.userService.setUser(user);
        })
      );

      this.subscriptions.push(
        this.socketService
          .listen('newNotifications')
          .subscribe((data: Notification[]) => {
            this.userService.setNotifications(data);
          })
      );
    }

    this.subscriptions.push(
      this.socketService.listen('deletedAccount').subscribe(() => {
        this.localStorage.clearToken();
        this.router.navigateByUrl('/login');
      })
    );
  }

  private onLogOut(): void {
    this.subscriptions.push(
      this.socketService.listen('appLogOut').subscribe(() => {
        this.router.navigateByUrl('/login');
      })
    );
  }
}
