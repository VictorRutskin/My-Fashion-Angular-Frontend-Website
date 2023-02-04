import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitingAgentComponent } from './visiting-agent.component';

describe('VisitingAgentComponent', () => {
  let component: VisitingAgentComponent;
  let fixture: ComponentFixture<VisitingAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitingAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitingAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
