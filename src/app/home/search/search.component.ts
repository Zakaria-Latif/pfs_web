import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
  searchTerm: string="";

  constructor(private route: ActivatedRoute, public searchService: SearchService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q'] || '';
      this.searchService.fetchSearchPlayers(this.searchTerm);
    });

    // this.route.queryParamMap.subscribe(params => {this.searchTerm = params.get('q') ?? "";});
    // this.searchService.fetchSearchMatches(this.searchTerm);
    this.searchService.fetchSearchPlayers(this.searchTerm);
  }
}
