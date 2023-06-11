import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatedMatchesComponent } from './created-matches.component';
import { CreatedMatchesRoutingModule } from './created-matches-routing.module';
import { MatchModule } from '../../my-matches/match/match.module';
import { MyMatchesModule } from '../../my-matches/my-matches.module';


@NgModule({
  declarations: [
    CreatedMatchesComponent
  ],
  imports: [
    CommonModule,
    CreatedMatchesRoutingModule,
    MatchModule,
    MyMatchesModule
  ]
})
export class CreatedMatchesModule { }
