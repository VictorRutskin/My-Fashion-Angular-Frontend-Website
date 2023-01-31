import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtocartButtonComponent } from './addtocart-button.component';

describe('AddtocartButtonComponent', () => {
  let component: AddtocartButtonComponent;
  let fixture: ComponentFixture<AddtocartButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtocartButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtocartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
