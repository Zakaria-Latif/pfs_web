import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarMatchComponent } from './calendar-match.component';
import { MatchModule } from 'src/app/home/my-matches/match/match.module';


@NgModule({
  declarations: [
    CalendarMatchComponent
  ],
  imports: [
    CommonModule,
    MatchModule
  ],
  exports: [ CalendarMatchComponent ]
})
export class CalendarMatchModule { }
