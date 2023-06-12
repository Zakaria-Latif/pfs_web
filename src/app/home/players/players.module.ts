import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersComponent } from './players.component';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayerModule } from './player/player.module';
import { PlayerComponent } from './player/player.component';


@NgModule({
  declarations: [
    PlayersComponent,
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    PlayerModule
  ],
  exports:[
    PlayerComponent
  ]
})
export class PlayersModule { }