import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopShirtsComponent } from './shop-shirts.component';

describe('ShopShirtsComponent', () => {
  let component: ShopShirtsComponent;
  let fixture: ComponentFixture<ShopShirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopShirtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
