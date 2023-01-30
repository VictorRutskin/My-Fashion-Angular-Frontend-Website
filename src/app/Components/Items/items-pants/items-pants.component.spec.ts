import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsPantsComponent } from './items-pants.component';

describe('ItemsPantsComponent', () => {
  let component: ItemsPantsComponent;
  let fixture: ComponentFixture<ItemsPantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsPantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsPantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
