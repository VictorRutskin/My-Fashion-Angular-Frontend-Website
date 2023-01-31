import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopNavigatorComponent } from './shop-navigator.component';

describe('ShopNavigatorComponent', () => {
  let component: ShopNavigatorComponent;
  let fixture: ComponentFixture<ShopNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopNavigatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
