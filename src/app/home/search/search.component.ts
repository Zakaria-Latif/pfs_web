import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { MatchesService } from 'src/app/services/matches/matches.service';
import { SearchService } from 'src/app/services/search/search.service';
import { Match } from 'src/utils/types/Match';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css', "./../feed/feed.component.css"]
})
export class SearchComponent  {
  searchTerm: string="";

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q'] || '';
      // this.searchService.fetchSearchPlayers(this.searchTerm);
      this.searchService.fetchSearchMatches(this.searchTerm);
    });
  }

  constructor(private route: ActivatedRoute, public searchService: SearchService,
    public matchesService: MatchesService, public localStorageService: LocalStorageService) { }
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

  hasSentInvitation(invitations: any[]){
    return invitations.some(inv=>inv.creatorId==this.localStorageService.getItem("id"));
  }

  setCurrentMatchId(id: number){
    this.currentMatchId=id;
  }

  public isPlayerInMatch(match: Match, playerId: number): boolean {
    return match?.playersList?.some(p => p.id === playerId) ?? false;
  }
}
