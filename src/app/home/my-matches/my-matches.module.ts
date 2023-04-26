import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyMatchesComponent } from './my-matches.component';
import { MyMatchesRoutingModule } from './my-matches-routing.module';
import { MatchComponent } from './match/match.component';
import { MatchModule } from './match/match.module';


@NgModule({
  declarations: [
    MyMatchesComponent,

  ],
  imports: [
    CommonModule,
    MyMatchesRoutingModule,
    MatchModule
  ]
})
export class MyMatchesModule { }
