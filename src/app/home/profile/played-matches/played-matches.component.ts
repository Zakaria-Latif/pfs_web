import { Component } from '@angular/core';
import { MatchesService } from 'src/app/services/matches/matches.service';

@Component({
  selector: 'app-played-matches',
  templateUrl: './played-matches.component.html',
  styleUrls: ['./played-matches.component.css', "./../../my-matches/match/match.component.css"]
})
export class PlayedMatchesComponent {
  isOnEdit=false;
  isViewMembersOn=false;
  constructor(public matchesService: MatchesService){}
  modal={
    isModalOn: false,
    title: "",
    info: "",
    buttonText: "Close",
    buttonAction: async()=>{},
    matchId: 1
  }

  joinMatch(){
    this.modal.isModalOn=true;
    this.modal.title="The invitation has been sent",
    this.modal.info="You will get a notification when the admin accepts your invitation, stay tuned",
    this.modal.buttonAction=async()=>{
      this.modal.isModalOn=false;
    }
  }
  viewMembers(matchId: number){
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
}
