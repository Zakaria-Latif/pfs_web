import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMatchComponent } from './calendar-match.component';

describe('CalendarMatchComponent', () => {
  let component: CalendarMatchComponent;
  let fixture: ComponentFixture<CalendarMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
