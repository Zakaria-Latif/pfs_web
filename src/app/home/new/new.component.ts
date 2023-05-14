import { Component } from '@angular/core';
import { Match } from 'src/utils/types/Match';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

  match: Match = new Match();

  onSubmit() {
    // TODO: Handle form submission
    console.log(this.match);
  }

  onFileSelected(event: any) {
    // TODO: Handle file selection
  }
}
