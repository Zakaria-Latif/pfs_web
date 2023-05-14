import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { Apollo, gql  } from 'apollo-angular';
import  { Player }  from "./../../../utils/types/Player";

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  players$: Observable<Player[]> = of([]);
  isLoading = false;
  errorMessage: string="";
 
  constructor(private apollo: Apollo) {}
 
  fetchPlayers(): Observable<Array<Player>> {
    this.isLoading=true;
    this.players$ = this.apollo
      .watchQuery<any>({
        query: gql`
          query players {
            players(paginationInput:{skip: 1, take:16}){
              id,
              username,
              location,
              description,
              createdAt,
              playerStatistics{
                rate,
                matchesNumber,
                position,
              }
            }
          }
        `,
      })
      .valueChanges
      .pipe(
        map((result) => {
          this.isLoading = result.loading;
          console.log(result);
          this.isLoading=false;
          return result.data?.players;
        })
      );
    this.isLoading=false;
    return this.players$;
  }

  getLoading(): boolean{
    return this.isLoading;
  }

  getError(): string{
    return this.errorMessage;
  }

  getPlayers(): Observable<Array<Player>>{
    return this.players$;
  }
}
