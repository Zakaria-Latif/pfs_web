import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchComponent } from './match.component';
import { PlayerModule } from '../../players/player/player.module';


@NgModule({
  declarations: [
    MatchComponent
  ],
  imports: [
    CommonModule,
    PlayerModule
  ],
  exports: [ MatchComponent ],
})
export class MatchModule { }
