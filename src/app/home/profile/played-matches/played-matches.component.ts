import { Component } from '@angular/core';

@Component({
  selector: 'app-played-matches',
  templateUrl: './played-matches.component.html',
  styleUrls: ['./played-matches.component.css']
})
export class PlayedMatchesComponent {
  isOnEdit=false;
  
  editMatch(id: number){
    this.isOnEdit=!this.isOnEdit;
    console.log(`Editing match with id # ${id}`);
  }

  closeEdit(){
    this.isOnEdit=false;
  }
}
