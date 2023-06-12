import { Component, Input, OnInit } from '@angular/core';
import { RequestsInvitationsService } from 'src/app/services/requestsInvitations/requests-invitations.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() id: number=-1; //just for testing
  @Input() title: string="Player Joined";
  @Input() timeStamp=new Date();
  @Input() type="Invitation";
 
  @Input() message: string="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout";
  @Input() isRead: boolean=true; //just for testing
  @Input() recipientId: number=-1; //just for testing
  @Input() entityId: number=-1; //just for testing
  
  actionAlreadyDone=true;


  constructor(public requestsInvitationsService: RequestsInvitationsService){}

  ngOnInit(): void {
    this.requestsInvitationsService.getAcceptedOrRefusedInvitationsIds().subscribe(nums=>{
      this.actionAlreadyDone=nums.includes(this.entityId);
    })
  }

  acceptInvitation(){
    this.requestsInvitationsService.acceptInvitation(this.entityId);
  }

  refuseInvitation(){
    this.requestsInvitationsService.refuseInvitation(this.entityId);
  }

  deleteInvitation(){
    this.requestsInvitationsService.deleteInvitation(this.entityId);
  }
}
