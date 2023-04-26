import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesListComponent } from './matches-list.component';
import { MatchesListRoutingModule } from './matches-list-routing.module';
import { CalendarMatchModule } from './calendar-match/calendar-match.module';


@NgModule({
  declarations: [
    MatchesListComponent,
  ],
  imports: [
    CommonModule,
    MatchesListRoutingModule,
    CalendarMatchModule
  ]
})
export class MatchesListModule { }
