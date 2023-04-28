import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchTimelineComponent } from './match-timeline.component';
import { MatchModule } from 'src/app/home/my-matches/match/match.module';



@NgModule({
  declarations: [
    MatchTimelineComponent
  ],
  imports: [
    CommonModule,
    MatchModule
  ],
  exports: [ MatchTimelineComponent ]
})
export class MatchTimelineModule { }