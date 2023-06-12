import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { MatchesService } from 'src/app/services/matches/matches.service';
import { MyMatchesService } from 'src/app/services/my-matches/my-matches.service';

@Component({
  selector: 'app-created-matches',
  templateUrl: './created-matches.component.html',
  styleUrls: ['./created-matches.component.css', "./../../my-matches/match/match.component.css"]
})
export class CreatedMatchesComponent {
  constructor(public myMatchesService: MyMatchesService, public matchesService: MatchesService) { }
  isOnEdit=false;
  isViewMembersOn=false;
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
  
  ngOnInit(): void {
    this.myMatchesService.fetchMyMatches();
  }
}
