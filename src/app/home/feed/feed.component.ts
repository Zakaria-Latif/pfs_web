import { Component } from '@angular/core';
import { Match } from 'src/utils/types/Match';
import { Observable, of } from 'rxjs';
import { Apollo, gql  } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { FeedService } from 'src/app/services/feed/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {

  constructor(public feedService: FeedService, private apollo: Apollo) { }
  isOnEdit=false;
  
  editMatch(id: number){
    this.isOnEdit=!this.isOnEdit;
    console.log(`Editing match with id # ${id}`);
  }

  closeEdit(){
    this.isOnEdit=false;
  }
  ngOnInit(): void {
    this.feedService.fetchFeedMatches();
  }
}
