import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth0LogoutBtnComponent } from './auth0-logout-btn.component';

describe('Auth0LogoutBtnComponent', () => {
  let component: Auth0LogoutBtnComponent;
  let fixture: ComponentFixture<Auth0LogoutBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Auth0LogoutBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Auth0LogoutBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
