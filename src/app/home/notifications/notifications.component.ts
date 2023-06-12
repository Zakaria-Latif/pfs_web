import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { RequestsInvitationsService } from 'src/app/services/requestsInvitations/requests-invitations.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit{
  constructor(public notificationsService: NotificationsService, 
    public requestsInvitationsService: RequestsInvitationsService){}

  ngOnInit(): void {
    this.notificationsService.fetchMyNotifications();
    
  }

  hasBeenDeleted(id: number){
    let isDeleted=false;
    this.requestsInvitationsService.getRemovedInvitationsIds().subscribe(ids=>{
      isDeleted=ids.includes(id);
    });
    return isDeleted;
  }

}
