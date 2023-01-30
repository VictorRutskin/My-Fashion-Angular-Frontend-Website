import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-recommended-carousel',
  templateUrl: './recommended-carousel.component.html',
  styleUrls: ['./recommended-carousel.component.css'],
  animations: [
    trigger('slideState', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class RecommendedCarouselComponent implements OnInit {
  slides = [
    { imageUrl: 'https://picsum.photos/id/10/600/300', title: 'Slide 1', description: 'Description for slide 1' },
    { imageUrl: 'https://picsum.photos/id/11/600/300', title: 'Slide 2', description: 'Description for slide 2' },
    { imageUrl: 'https://picsum.photos/id/12/600/300', title: 'Slide 3', description: 'Description for slide 3' },
  ];
  currentSlide = this.slides[0];
  currentIndex = 0;
  slideState = 'in';

  ngOnInit() {
    setInterval(() => {
      this.slideState = 'void';
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.currentSlide = this.slides[this.currentIndex];
        this.slideState = 'in';
      }, 1000);
    }, 5000);
  }
}