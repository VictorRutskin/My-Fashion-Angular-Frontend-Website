import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPantsComponent } from './shop-pants.component';

describe('ShopPantsComponent', () => {
  let component: ShopPantsComponent;
  let fixture: ComponentFixture<ShopPantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopPantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopPantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
