import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { Match } from 'src/utils/types/Match';
import { Apollo, gql  } from 'apollo-angular';
import { Player } from 'src/utils/types/Player';

interface Config {
  matches: {
    minDuration: number;
    maxDuration: number;
    dateFrom: string;
    dateTo: string;
  };
  players: {
    position: string;
    minRate: number;
  };
}


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchMatches$: Observable<Match[]> = of([]);
  searchPlayers$: Observable<Player[]> = of([]);
  isLoading = false;
  currentSearchCategory="matches";
  errorMessage: string="";

  //This will be stored in the ngrx store later
  config:Config= {
    matches: {
      minDuration: 0,
      maxDuration: 2,
      dateFrom: "2020-01-05T07:54:03.000Z",
      dateTo: "2025-01-05T07:54:03.000Z",
    },
    players: {
      position: "Defender",
      minRate: 1
    }
  };
 
  constructor(private apollo: Apollo) {}
 
  fetchSearchMatches(searchTerm: string): Observable<Array<Match>> {
    const {minDuration, maxDuration, dateFrom: dateFromT, dateTo: dateToT}=this.config.matches;
    const dateFrom=new Date(dateFromT).toISOString;
    const dateTo=new Date(dateToT).toISOString;
    console.log("Got here");

    const query = gql`
      query searchMatches($searchTerm: String!, $minDuration: Float!, $maxDuration: Float!, 
      $dateFrom: String!, $dateTo: String!) {
        searchMatches(searchMatchInput: { 
          searchTerm: $searchTerm, 
          minDuration: $minDuration, 
          maxDuration: $maxDuration, 
          dateFrom: $dateFrom, 
          dateTo: $dateTo }) {
          id
          name
          location
          time
          duration
          creator {
            username
          }
          players {
            player {
              username
            }
          }
        }
      }
    `;

    this.searchMatches$ = this.apollo
      .query<any>({
        query: query,
        variables: {
          searchTerm: searchTerm,
          minDuration: minDuration,
          maxDuration: maxDuration,
          dateFrom,
          dateTo
        }
      })
      .pipe(
        map((result) => {
          console.log(result.data.searchMatches);
          this.isLoading=false;
          return result.data.searchMatches;
        })
      );

      this.isLoading=false;
      return this.searchMatches$;
  }

  fetchSearchPlayers(searchTerm: string): Observable<Array<Player>> {
    const { position, minRate } = this.config.players;
    const searchPlayerInput = {
      searchTerm,
      position,
      minRate,
    };
    this.isLoading = true;
    this.searchPlayers$ = this.apollo
      .watchQuery<any>({
        query: gql`
          query searchPlayers($searchPlayerInput: SearchPlayerInput!) {
            searchPlayers(searchPlayerInput: $searchPlayerInput) {
              id
              username
              location
              description
              createdAt
              playerStatistics {
                rate
                matchesNumber
                position
              }
            }
          }
        `,
        variables: { searchPlayerInput },
      })
      .valueChanges.pipe(
        map((result) => {
          this.isLoading = result.loading;
          console.log(result);
          this.isLoading = false;
          return result.data?.searchPlayers;
        })
      );
    return this.searchPlayers$;
  }


  getLoading(): boolean{
    return this.isLoading;
  }

  getError(): string{
    return this.errorMessage;
  }

  getSearchMatches(): Observable<Array<Match>>{
    return this.searchMatches$;
  }

  getSearchPlayers(): Observable<Array<Player>>{
    return this.searchPlayers$;
  }
}
