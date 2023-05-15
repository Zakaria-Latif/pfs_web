import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { PlayerModule } from '../players/player/player.module';
import { MatchModule } from '../my-matches/match/match.module';


@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    PlayerModule,
    MatchModule
  ]
})
export class SearchModule { }
