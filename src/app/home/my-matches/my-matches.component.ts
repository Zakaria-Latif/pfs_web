import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { MatchesService } from 'src/app/services/matches/matches.service';
import { MyMatchesService } from 'src/app/services/my-matches/my-matches.service';

@Component({
  selector: 'app-my-matches',
  templateUrl: './my-matches.component.html',
  styleUrls: ['./my-matches.component.css', "./../my-matches/match/match.component.css"
    , "./../new/new.component.css"
  ]
})
export class MyMatchesComponent {
  constructor(public matchesService: MatchesService) { }
  isOnEdit=false;
  currentMatchId=-1;
  
  isViewMembersOn=false;

  joinMatch(){
    this.matchesService.joinMatch(this.currentMatchId);
  }

  viewMembers(matchId: number){
    this.setCurrentMatchId(matchId);
    this.toggleViewMember();
    console.log(`Viewing match members # ${matchId}`);
    this.matchesService.fetchMembers(matchId);

  }

  toggleViewMember(){
    this.isViewMembersOn=!this.isViewMembersOn;
  }

  editMatch(id: number){
    this.isOnEdit=!this.isOnEdit;
    console.log(`Editing match with id # ${id}`);
  }

  closeEdit(){
    this.isOnEdit=false;
  }
  
  ngOnInit(): void {
    this.matchesService.fetchMyMatches();
  }

  setCurrentMatchId(id: number){
    this.currentMatchId=id;
  }
}
