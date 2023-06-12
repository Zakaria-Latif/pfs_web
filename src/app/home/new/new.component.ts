import { Component } from '@angular/core';
import { MatchesService } from 'src/app/services/matches/matches.service';
import { Match } from 'src/utils/types/Match';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  constructor(public matchesService: MatchesService){}
  
  onSubmit(newMatch: {
    name: string,
    location: string,
    time: string,
    duration: number,
    prize: string;
    playersNumber: number
  }) {
    // TODO: Handle form submission
    this.matchesService.addMatch({
      ...newMatch, 
      time: new Date(newMatch.time).toISOString()
    });
  }

  

  onFileSelected(event: any) {
    // TODO: Handle file selection
  }
}
