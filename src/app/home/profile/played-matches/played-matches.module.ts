import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayedMatchesComponent } from './played-matches.component';
import { PlayedMatchesRoutingModule } from './played-matches-routing.module';
import { MatchModule } from '../../my-matches/match/match.module';


@NgModule({
  declarations: [
    PlayedMatchesComponent
  ],
  imports: [
    CommonModule,
    PlayedMatchesRoutingModule,
    MatchModule
  ]
})
export class PlayedMatchesModule { }
