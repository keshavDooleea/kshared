import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocketService } from 'src/app/services/web-socket/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private socketSubscription: Subscription;

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketSubscription = this.socketService
      .listen('initialLanding')
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnDestroy(): void {
    this.socketSubscription.unsubscribe();
  }
}
