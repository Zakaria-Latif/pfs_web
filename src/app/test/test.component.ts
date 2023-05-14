import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Apollo, gql  } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Match } from 'src/utils/types/Match';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  // standalone: true,
})
export class TestComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  matches$: Observable<Match[]> = of([]);;
  loading = true;
  error: any;
 
  constructor(private apollo: Apollo) {}
 
  ngOnInit() {
    this.matches$ = this.apollo
      .watchQuery<any>({
        query: gql`
          query matches {
            matches(paginationInput:{skip: 1, take:16}){
              id,
              name,
              location,
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
          this.loading = result.loading;
          this.error = result.error;
          console.log(result);
          return result.data?.matches;
        })
      );
  }

}
