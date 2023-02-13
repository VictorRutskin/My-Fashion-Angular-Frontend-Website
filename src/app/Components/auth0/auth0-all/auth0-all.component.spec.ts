import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth0AllComponent } from './auth0-all.component';

describe('Auth0AllComponent', () => {
  let component: Auth0AllComponent;
  let fixture: ComponentFixture<Auth0AllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Auth0AllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Auth0AllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
