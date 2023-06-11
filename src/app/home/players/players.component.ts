import { Component } from '@angular/core';
import { PlayersService } from 'src/app/services/players/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  constructor(public playersService: PlayersService) { }

  ngOnInit(): void {
    this.playersService.fetchPlayers();
  }
}
