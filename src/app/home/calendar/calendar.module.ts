import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarComponent } from './calendar.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { SquareComponent } from './square/square.component';
import { MatchesTimelineComponent } from './matches-timeline/matches-timeline.component';
import { FormsModule } from '@angular/forms';
import { MatchesTimelineModule } from './matches-timeline/matches-timeline.module';


@NgModule({
  declarations: [
    CalendarComponent,
    SquareComponent,
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FormsModule,
    MatchesTimelineModule
  ]
})
export class CalendarModule { }
