import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsHeadwearComponent } from './items-headwear.component';

describe('ItemsHeadwearComponent', () => {
  let component: ItemsHeadwearComponent;
  let fixture: ComponentFixture<ItemsHeadwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsHeadwearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsHeadwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
