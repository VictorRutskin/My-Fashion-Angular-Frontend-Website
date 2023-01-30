import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsBuildComponent } from './items-build.component';

describe('ItemsBuildComponent', () => {
  let component: ItemsBuildComponent;
  let fixture: ComponentFixture<ItemsBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsBuildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
