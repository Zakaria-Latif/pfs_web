import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { Match } from 'src/utils/types/Match';
import { Apollo, gql  } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class MyMatchesService {
  myMatches$: Observable<Match[]> = of([]);
  isLoading = false;
  errorMessage: string="";
 
  constructor(private apollo: Apollo) {}
 
  fetchMyMatches(): Observable<Array<Match>> {
    this.isLoading=true;
    this.myMatches$ = this.apollo
      .watchQuery<any>({
        query: gql`
          query myMatches {
            myMatches(paginationInput:{skip: 0, take:300}){
              id,
              creatorId,
              name,
              location,
              duration,
              time,
              creator{
                username
              }
            }
          }
        `,
      })
      .valueChanges
      .pipe(
        map((result) => {
          // this.isLoading = result.loading;
          console.log(result);
          this.isLoading=false;
          return result.data?.myMatches;
        })
      );
    this.isLoading=false;
    return this.myMatches$;
  }

  getLoading(): boolean{
    return this.isLoading;
  }

  getError(): string{
    return this.errorMessage;
  }

  getMyMatches(): Observable<Array<Match>>{
    return this.myMatches$;
  }
}
