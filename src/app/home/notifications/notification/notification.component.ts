import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  @Input() label: string="Player Joined";
  @Input() timeStamp=new Date();
  @Input() description: string="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout";
  @Input() isAction: boolean=true; //just for testing
}
