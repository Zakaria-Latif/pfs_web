import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { MatchModule } from '../my-matches/match/match.module';
import { PlayerModule } from '../players/player/player.module';




@NgModule({
  declarations: [
    SuggestionsComponent,
    SuggestionComponent,
    
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule,
    MatchModule,
    PlayerModule
  ]
})
export class SuggestionsModule { }