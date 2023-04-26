import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';
import { SuggestionComponent } from './suggestion/suggestion.component';




@NgModule({
  declarations: [
    SuggestionsComponent,
    SuggestionComponent
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule
  ]
})
export class SuggestionsModule { }