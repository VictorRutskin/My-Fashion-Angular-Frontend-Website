import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurModelButtonComponent } from './our-model-button.component';

describe('OurModelButtonComponent', () => {
  let component: OurModelButtonComponent;
  let fixture: ComponentFixture<OurModelButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurModelButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurModelButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
