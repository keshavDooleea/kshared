import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import * as confetti from 'canvas-confetti';
import { Subscription } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { UserService } from 'src/app/services/user/user.service';
import { SocketService } from 'src/app/services/web-socket/socket.service';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
})
export class StarsComponent implements OnInit, OnDestroy {
  stars = [1, 2, 3, 4, 5];
  confettiAngle: number;
  confettiX: number;
  confettiVelocity: number;
  private subscriptions: Subscription[] = [];

  constructor(
    private elementRef: ElementRef,
    private socketService: SocketService,
    private localStorageService: LocalStorageService,
    private userService: UserService
  ) {
    this.getWindowSize();
  }

  ngOnInit(): void {
    this.subscribeToUser();
    this.subscribeToSocket();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  @HostListener('window:resize', ['$event'])
  getWindowSize(event?: Event): void {
    if (window.innerWidth >= 650) {
      this.confettiAngle = 55;
      this.confettiX = 0.08;
      this.confettiVelocity = 90;
    } else {
      this.confettiAngle = 90;
      this.confettiX = 0.5;
      this.confettiVelocity = 50;
    }
  }

  private subscribeToUser(): void {
    this.subscriptions.push(
      this.userService.getUserObservable().subscribe((newUser) => {
        if (newUser) {
          setTimeout(() => {
            this.fillStarRating(newUser.user.stars);
          }, 100);
        }
      })
    );
  }

  private subscribeToSocket(): void {
    this.subscriptions.push(
      this.socketService.listen('updatedStars').subscribe((newStars) => {
        this.fillStarRating(newStars);
      })
    );
  }

  onHover(index: number): void {
    this.svgStars.forEach((star, i) => {
      star.classList.remove('hover-star');
      if (i <= index) {
        star.classList.add('hover-star');
      }
    });
  }

  onStarsClicked(index: number): void {
    for (let i = 0; i < this.svgStars.length; i++) {
      this.svgStars[i].classList.remove('hover-star');
      this.svgStars[i].classList.remove('selected-stars');

      if (i <= index) {
        this.svgStars[i].classList.add('selected-stars');
      }
    }

    this.emitStars(index);

    // above average
    if (index >= 3 - 1) {
      this.throwConfetti();
    }
  }

  onUnHover(): void {
    this.svgStars.forEach((star) => star.classList.remove('hover-star'));
  }

  private fillStarRating(starRating: number): void {
    this.svgStars.forEach((star, i) => {
      this.svgStars[i].classList.remove('selected-stars');

      if (i < starRating) {
        this.svgStars[i].classList.add('selected-stars');
      }
    });
  }

  private emitStars(index: number): void {
    const data = {
      stars: index + 1,
      token: this.localStorageService.getToken(),
    };
    this.socketService.emit('updateStars', data);
  }

  private throwConfetti(): void {
    confetti.create(undefined, { resize: true })({
      shapes: ['circle', 'circle', 'square'],
      particleCount: 200,
      startVelocity: this.confettiVelocity,
      angle: this.confettiAngle,
      spread: 55,
      ticks: 400,
      origin: {
        x: this.confettiX,
        y: 0.4,
      },
    });
  }

  get svgStars(): HTMLImageElement[] {
    return this.elementRef.nativeElement.querySelectorAll('.star-span img');
  }
}
