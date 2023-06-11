import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, of, Observable, map } from 'rxjs';
import { Player } from 'src/utils/types/Player';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private loading$ = new BehaviorSubject<boolean>(false);
  player$: Observable<Player> = of(new Player());

  getLoading(): Observable<boolean>{
    return this.loading$.asObservable();
  }

  getPlayer(): Observable<Player>{
    return this.player$;
  }

  constructor(private apollo: Apollo, private localStorageService: LocalStorageService) {}

  fetchPlayer(): Observable<Player> {
    this.loading$.next(true);
    this.player$ = this.apollo
      .watchQuery<any>({
        query: gql`
          query player($id: Int!) { 
            player(id: $id){
              id,
              username
            }
          }
        `,
        variables: { id: this.localStorageService.getItem("id") }
      })
      .valueChanges
      .pipe(
        map((result) => {
          console.log(result);
          this.loading$.next(false);
          return result.data?.player;
        })
      );
    this.loading$.next(false);
    return this.player$;
  }
}
