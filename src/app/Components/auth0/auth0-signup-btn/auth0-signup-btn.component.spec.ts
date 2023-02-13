import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth0SignupBtnComponent } from './auth0-signup-btn.component';

describe('Auth0SignupBtnComponent', () => {
  let component: Auth0SignupBtnComponent;
  let fixture: ComponentFixture<Auth0SignupBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Auth0SignupBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Auth0SignupBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
