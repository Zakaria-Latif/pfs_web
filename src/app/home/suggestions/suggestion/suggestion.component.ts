import { Component } from '@angular/core';
@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css', "./../../my-matches/match/match.component.css"]
})
export class SuggestionComponent {
  items: Array<number>=Array.from({length: 10}, (value, index) => index + 1);
}
