import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  @Input() id: number=0;
  @Input() username: string="";
  @Input() rate: number=0;
  @Input() matchesNumber: number=0;
  @Input() position: string="Defender";
  @Input() location: string="Marrakesh";
  @Input() description: string="";
  @Input() createdAt: string="2023-01-05T07:54:03.000Z";
  @Input() playerImage?: string;
}
