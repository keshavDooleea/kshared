import { Component, OnInit } from '@angular/core';
import * as confetti from 'canvas-confetti';

@Component({
  selector: 'app-confetti-icon',
  templateUrl: './confetti-icon.component.html',
  styleUrls: ['./confetti-icon.component.scss'],
})
export class ConfettiIconComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  throwRandomConfettis(): void {
    confetti.create(undefined, { resize: true })({
      shapes: ['circle', 'circle', 'square'],
      particleCount: this.randomRange(100, 150),
      angle: this.randomRange(45, 135),
      spread: this.randomRange(40, 80),
      ticks: this.randomRange(200, 400),
      origin: {
        x: this.randomRange(0.4, 0.7),
        y: this.randomRange(0.4, 0.7),
      },
    });
  }

  private randomRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}
