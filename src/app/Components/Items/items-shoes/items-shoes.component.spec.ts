import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsShoesComponent } from './items-shoes.component';

describe('ItemsShoesComponent', () => {
  let component: ItemsShoesComponent;
  let fixture: ComponentFixture<ItemsShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsShoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
