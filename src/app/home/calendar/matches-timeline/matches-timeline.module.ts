import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesTimelineComponent } from './matches-timeline.component';
import { MatchTimelineModule } from './match-timeline/match-timeline.module';


@NgModule({
  declarations: [
    MatchesTimelineComponent
  ],
  imports: [
    CommonModule,
    MatchTimelineModule
  ],
  exports: [ MatchesTimelineComponent ]
})
export class MatchesTimelineModule { }