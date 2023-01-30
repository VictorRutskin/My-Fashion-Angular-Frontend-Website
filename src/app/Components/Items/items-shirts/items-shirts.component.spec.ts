import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsShirtsComponent } from './items-shirts.component';

describe('ItemsShirtsComponent', () => {
  let component: ItemsShirtsComponent;
  let fixture: ComponentFixture<ItemsShirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsShirtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
