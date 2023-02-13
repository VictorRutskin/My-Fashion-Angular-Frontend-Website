import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth0LoginBtnComponent } from './auth0-login-btn.component';

describe('Auth0LoginBtnComponent', () => {
  let component: Auth0LoginBtnComponent;
  let fixture: ComponentFixture<Auth0LoginBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Auth0LoginBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Auth0LoginBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
