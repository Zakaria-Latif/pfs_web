import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { Match } from 'src/utils/types/Match';
import { Apollo, gql  } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  feedMatches$: Observable<Match[]> = of([]);
  isLoading = false;
  errorMessage: string="";
 
  constructor(private apollo: Apollo) {}
 
  fetchFeedMatches(): Observable<Array<Match>> {
    this.isLoading=true;
    this.feedMatches$ = this.apollo
      .watchQuery<any>({
        query: gql`
          query matches {
            matches(paginationInput:{skip: 1, take:16}){
              id,
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
          this.isLoading = result.loading;
          console.log(result);
          this.isLoading=false;
          return result.data?.matches;
        })
      );
    this.isLoading=false;
    return this.feedMatches$;
  }

  getLoading(): boolean{
    return this.isLoading;
  }

  getError(): string{
    return this.errorMessage;
  }

  getFeedMatches(): Observable<Array<Match>>{
    return this.feedMatches$;
  }
}
