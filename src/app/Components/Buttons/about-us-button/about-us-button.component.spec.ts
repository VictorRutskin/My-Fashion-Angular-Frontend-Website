import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsButtonComponent } from './about-us-button.component';

describe('AboutUsButtonComponent', () => {
  let component: AboutUsButtonComponent;
  let fixture: ComponentFixture<AboutUsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
