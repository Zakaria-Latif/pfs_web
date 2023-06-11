import { DatePipe } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { MatchesService } from 'src/app/services/matches/matches.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent {
  
  // items: Array<number>=Array.from({length: 10}, (value, index) => index + 1);
  @Input() id=1;
  @Input() creatorId=-1;
  @Input() isAddedToCalendar: boolean=false;
  @Input() name: string="GI2 Kesh";
  @Input() matchImage="../../../../assets/sports/football.svg";
  @Input() category="Football";
  @Input() time="2023-03-13T00:58:30.000Z";
  @Input() duration=2;
  @Input() location="Marrakesh";
  @Input() currentCapacity=5;
  @Input() maxCapacity=10;
  @Input() creatorName="El Ouali";
  @Input() creatorImage="https://i.pravatar.cc/201";
  @Input() isMember=false;
  @Input() membersImages: Array<string>=["https://i.pravatar.cc/100", "https://i.pravatar.cc/300", "https://i.pravatar.cc/201", "https://i.pravatar.cc/111", "https://i.pravatar.cc/291"];
  @Input() chatId=1;
  @Input() isSuggested=false;
  @Input() hasSentInvitation=false;

  @Output() dipatchEditMatch: EventEmitter<number> = new EventEmitter<number>();
  @Output() dispatchViewMembers: EventEmitter<number> = new EventEmitter<number>();

  constructor(private readonly router: Router, public localStorageService: LocalStorageService,
    public matchesService: MatchesService
    ){
  }

  modal={
    isModalOn: false,
    title: "",
    info: "",
    buttonText: "Close",
    buttonActionNegative: async()=>{},
    buttonActionPositive: async()=>{},
    matchId: 1
  }

  deleteMatch(matchId: number){
    this.modal.isModalOn=true;
    this.modal.title="Be Careful!",
    this.modal.info="Are you sure you want to delete this match?",
    this.modal.buttonActionNegative=async()=>{
      this.modal.isModalOn=false;
    }
    this.modal.buttonActionPositive=async()=>{
      this.modal.isModalOn=false;
      console.log("Deleting Match");
    }
  }

  viewMembers(matchId: number){
    this.dispatchViewMembers.emit(matchId);
  }

  openChat(){
    //just for now
    this.router.navigate(['/home', 'expainded-chat', this.chatId]);
  }

  addToCalendar(){
    //do the logic to add it to calendar
    this.router.navigate(["/home", "calendar"]);
  }

  removeFromCalendar(){
    //do the logic to remove the match from the calendar
    this.router.navigate(["/home", "calendar"]);
  }

  editMatch(id: number){
    this.dipatchEditMatch.emit(id);
  }

}
