import { Component } from '@angular/core';
import { Match } from 'src/utils/types/Match';
import { Observable, of } from 'rxjs';
import { Apollo, gql  } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { FeedService } from 'src/app/services/feed/feed.service';
import { MatchesService } from 'src/app/services/matches/matches.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css', "./../my-matches/match/match.component.css"]
})
export class FeedComponent {

  constructor(public feedService: FeedService, private apollo: Apollo, public matchesService: MatchesService, public localStorageService: LocalStorageService) { }
  isOnEdit=false;
  isViewMembersOn=false;
  currentMatchId=-1;

  modal={
    isModalOn: false,
    title: "",
    info: "",
    buttonText: "Close",
    buttonAction: async()=>{},
    matchId: 1
  }

  joinMatch(){
    this.matchesService.joinMatch(this.currentMatchId);
  }

  viewMembers(matchId: number){
    this.setCurrentMatchId(matchId);
    this.toggleViewMember();
    console.log(`Viewing match members # ${matchId}`);
    this.matchesService.fetchMembers(matchId).subscribe(res=>{
      console.log(res);
    });
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
    this.feedService.fetchFeedMatches();
  }

  hasSentInvitation(invitations: any[]){
    return invitations.some(inv=>inv.creatorId==this.localStorageService.getItem("id"));
  }

  setCurrentMatchId(id: number){
    this.currentMatchId=id;
  }
}
