import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyMatchesComponent } from './my-matches.component';
import { MyMatchesRoutingModule } from './my-matches-routing.module';
import { MatchModule } from './match/match.module';
import { PlayerModule } from '../players/player/player.module';


@NgModule({
  declarations: [
    MyMatchesComponent,

  ],
  imports: [
    CommonModule,
    MyMatchesRoutingModule,
    MatchModule,
    PlayerModule
  ]
})
export class MyMatchesModule { }
