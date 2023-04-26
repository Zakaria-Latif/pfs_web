import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesTimelineComponent } from './matches-timeline.component';

describe('MatchesTimelineComponent', () => {
  let component: MatchesTimelineComponent;
  let fixture: ComponentFixture<MatchesTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchesTimelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchesTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
