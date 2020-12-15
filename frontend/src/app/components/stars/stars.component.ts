import { Component, ElementRef, OnInit } from '@angular/core';

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
  }

  onMouseOut(): void {
    this.svgStars.forEach((star) => star.classList.remove('hover-star'));
  }

  get svgStars(): HTMLImageElement[] {
    return this.elementRef.nativeElement.querySelectorAll('.star-span img');
  }
}
