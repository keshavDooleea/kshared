import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Dashboard } from 'src/app/classes/dashboard';
import { SocketService } from 'src/app/services/web-socket/socket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
  content: Dashboard;
  showContent: boolean;

  private subscriptions: Subscription[] = [];

  constructor(private socketService: SocketService) {
    this.showContent = false;
    this.content = {} as Dashboard;
  }

  ngAfterViewInit(): void {
    this.subscribeToSocket();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  private subscribeToSocket(): void {
    this.socketService.emit('dashboardConnected', {});

    this.subscriptions.push(
      this.socketService.listen('dashboardData').subscribe((data) => {
        this.showContent = true;
        this.content = JSON.parse(data) as Dashboard;
      })
    );
  }
}
