import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersCercleComponent } from './players-cercle.component';
import { PlayersCercleRoutingModule } from './players-cercle-routing.module';
import { PlayerModule } from '../../players/player/player.module';


@NgModule({
  declarations: [
    PlayersCercleComponent
  ],
  imports: [
    CommonModule,
    PlayersCercleRoutingModule,
    PlayerModule
  ]
})
export class PlayersCercleModule { }