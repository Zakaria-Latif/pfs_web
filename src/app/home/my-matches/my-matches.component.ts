import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { MyMatchesService } from 'src/app/services/my-matches/my-matches.service';

@Component({
  selector: 'app-my-matches',
  templateUrl: './my-matches.component.html',
  styleUrls: ['./my-matches.component.css']
})
export class MyMatchesComponent {
  constructor(public myMatchesService: MyMatchesService, private apollo: Apollo) { }
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
