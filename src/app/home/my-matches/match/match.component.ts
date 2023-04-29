import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent {
  // items: Array<number>=Array.from({length: 10}, (value, index) => index + 1);
  @Input() id=1;
  @Input() isAddedToCalendar: boolean=false;
  @Input() name: string="GI2 Kesh";
  @Input() matchImage="../../../../assets/sports/football.svg";
  @Input() category="Football";
  @Input() time="14 July, 5PM";
  @Input() location="Marrakesh";
  @Input() currentCapacity=5;
  @Input() maxCapacity=10;
  @Input() creatorName="El Ouali";
  @Input() creatorImage="https://i.pravatar.cc/201";
  @Input() isOwner=true;
  @Input() isMember=true;
  @Input() membersImages: Array<string>=["https://i.pravatar.cc/100", "https://i.pravatar.cc/300", "https://i.pravatar.cc/201", "https://i.pravatar.cc/111", "https://i.pravatar.cc/291"];
  @Input() chatId=1;

  isViewMembersOn=false;

  toggleViewMember(){
    this.isViewMembersOn=!this.isViewMembersOn;
  }

  constructor(private readonly router: Router){}

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

  deleteMatch(){
    console.log(`Deleting match with id # ${this.id}`)
  }

  editMatch(){
    console.log(`Editing match with id # ${this.id}`);
  }
}
