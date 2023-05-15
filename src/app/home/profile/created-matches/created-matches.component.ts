import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { MyMatchesService } from 'src/app/services/my-matches/my-matches.service';

@Component({
  selector: 'app-created-matches',
  templateUrl: './created-matches.component.html',
  styleUrls: ['./created-matches.component.css']
})
export class CreatedMatchesComponent {
  constructor(public myMatchesService: MyMatchesService) { }
  isOnEdit=false;
  
  editMatch(id: number){
    this.isOnEdit=!this.isOnEdit;
    console.log(`Editing match with id # ${id}`);
  }

  closeEdit(){
    this.isOnEdit=false;
  }
  
  ngOnInit(): void {
    this.myMatchesService.fetchMyMatches();
  }
}
