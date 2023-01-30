import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedCarouselComponent } from './recommended-carousel.component';

describe('RecommendedCarouselComponent', () => {
  let component: RecommendedCarouselComponent;
  let fixture: ComponentFixture<RecommendedCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendedCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
