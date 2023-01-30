import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommended-carousel',
  templateUrl: './recommended-carousel.component.html',
  styleUrls: ['./recommended-carousel.component.css'],
})
export class RecommendedCarouselComponent implements OnInit {
  slides = [
    { imageUrl: 'assets/Images/FashionModels/FM1.jpg', title: 'Slide 1', description: 'Description for slide 1' },
    { imageUrl: 'assets/Images/FashionModels/FM2.jpg', title: 'Slide 2', description: 'Description for slide 2' },
    { imageUrl: 'assets/Images/FashionModels/FM3.jpg', title: 'Slide 3', description: 'Description for slide 3' },
    { imageUrl: 'assets/Images/FashionModels/FM4.jpg', title: 'Slide 3', description: 'Description for slide 3' },
    { imageUrl: 'assets/Images/FashionModels/FM5.jpg', title: 'Slide 3', description: 'Description for slide 3' },
    { imageUrl: 'assets/Images/FashionModels/FM6.jpg', title: 'Slide 3', description: 'Description for slide 3' },
    { imageUrl: 'assets/Images/FashionModels/FM7.jpg', title: 'Slide 3', description: 'Description for slide 3' },
    { imageUrl: 'assets/Images/FashionModels/FM9.jpg', title: 'Slide 3', description: 'Description for slide 3' },
    { imageUrl: 'assets/Images/FashionModels/FM10.jpg', title: 'Slide 3', description: 'Description for slide 3' },
    { imageUrl: 'assets/Images/FashionModels/FM11.jpg', title: 'Slide 3', description: 'Description for slide 3' },
    { imageUrl: 'assets/Images/FashionModels/FM12.jpg', title: 'Slide 3', description: 'Description for slide 3' },
    { imageUrl: 'assets/Images/FashionModels/FM13.jpg', title: 'Slide 3', description: 'Description for slide 3' },
    { imageUrl: 'assets/Images/FashionModels/FM14.jpg', title: 'Slide 3', description: 'Description for slide 3' },
    { imageUrl: 'assets/Images/FashionModels/FM15.jpg', title: 'Slide 3', description: 'Description for slide 3' },
    { imageUrl: 'assets/Images/FashionModels/FM16.jpg', title: 'Slide 3', description: 'Description for slide 3' },
    { imageUrl: 'assets/Images/FashionModels/FM17.jpg', title: 'Slide 3', description: 'Description for slide 3' },

  ];
  currentSlide = this.slides[0];
  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      this.currentSlide = this.slides[this.currentIndex];
    }, 2000);
  }
}