import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocketService } from 'src/app/services/web-socket/socket.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit, OnDestroy {
  readonly stars = [1, 2, 3, 4, 5];
  private socketSubscription: Subscription;

  constructor(private socket: SocketService, private elementRef: ElementRef) {
    this.updateGlobalStars();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.socketSubscription.unsubscribe();
  }

  private updateGlobalStars(): void {
    this.socket.emit('getGlobalStars', {});

    this.socketSubscription = this.socket
      .listen('avgStars')
      .subscribe((starsAmount: number) => {
        this.fillStars(starsAmount);
      });
  }

  private fillStars(index: number): void {
    this.svgStars.forEach((star, i) => {
      if (i <= index - 1) {
        star.classList.add('light-star');
      }
    });
  }

  get svgStars(): HTMLImageElement[] {
    return this.elementRef.nativeElement.querySelectorAll('.stars-span img');
  }
}
