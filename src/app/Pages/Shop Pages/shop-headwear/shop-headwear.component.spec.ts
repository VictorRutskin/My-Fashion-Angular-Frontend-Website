import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopHeadwearComponent } from './shop-headwear.component';

describe('ShopHeadwearComponent', () => {
  let component: ShopHeadwearComponent;
  let fixture: ComponentFixture<ShopHeadwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopHeadwearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopHeadwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
