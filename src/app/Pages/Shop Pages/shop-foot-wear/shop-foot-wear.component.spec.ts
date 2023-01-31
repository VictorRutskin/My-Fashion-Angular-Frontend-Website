import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFootWearComponent } from './shop-foot-wear.component';

describe('ShopFootWearComponent', () => {
  let component: ShopFootWearComponent;
  let fixture: ComponentFixture<ShopFootWearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopFootWearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopFootWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
