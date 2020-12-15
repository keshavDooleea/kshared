import { Component, ElementRef, OnInit } from '@angular/core';
import * as confetti from 'canvas-confetti';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
})
export class StarsComponent implements OnInit {
  stars = [1, 2, 3, 4, 5];

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

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

    // above average
    if (index >= 3 - 1) {
      this.throwConfetti();
    }
  }

  onUnHover(): void {
    this.svgStars.forEach((star) => star.classList.remove('hover-star'));
  }

  private throwConfetti(): void {
    confetti.create(undefined, { resize: true })({
      shapes: ['circle', 'circle', 'square'],
      particleCount: 200,
      startVelocity: 90,
      angle: 55,
      spread: 55,
      ticks: 400,
      origin: {
        x: 0.08,
        y: 0.5,
      },
    });
  }

  get svgStars(): HTMLImageElement[] {
    return this.elementRef.nativeElement.querySelectorAll('.star-span img');
  }
}
