import { Component } from '@angular/core';
import { SuggestionsService } from 'src/app/services/suggestions/suggestions.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent {
  constructor(public suggestionsService: SuggestionsService) { }
  isOnEdit=false;
  
  editMatch(id: number){
    this.isOnEdit=!this.isOnEdit;
    console.log(`Editing match with id # ${id}`);
  }

  closeEdit(){
    this.isOnEdit=false;
  }
  
  ngOnInit(): void {
    this.suggestionsService.fetchSuggestionsMatches();
  }
}
