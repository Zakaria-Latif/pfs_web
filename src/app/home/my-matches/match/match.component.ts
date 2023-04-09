import { Component } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent {
  items: Array<number>=Array.from({length: 10}, (value, index) => index + 1);
}
