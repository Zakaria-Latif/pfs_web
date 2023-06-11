import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search/search.service';
import { Match } from 'src/utils/types/Match';

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
      // this.searchService.fetchSearchPlayers(this.searchTerm);
      this.searchService.fetchSearchMatches(this.searchTerm);
    });
  }

  public isPlayerInMatch(match: Match, playerId: number): boolean {
    return match?.playersList?.some(p => p.id === playerId) ?? false;
  }
}
