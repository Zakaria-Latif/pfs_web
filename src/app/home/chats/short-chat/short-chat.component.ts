import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-short-chat',
  templateUrl: './short-chat.component.html',
  styleUrls: ['./short-chat.component.css']
})
export class ShortChatComponent {
  @Input() id: number=0;
}
