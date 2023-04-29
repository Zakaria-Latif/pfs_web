import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Apollo, gql  } from 'apollo-angular';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  // standalone: true,
})
export class TestComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  rates: any[]=[];
  loading = true;
  error: any;
 
  constructor(private apollo: Apollo) {}
  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            rates(currency: "USD") {
              currency
              rate
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.rates = result.data?.rates;
        this.loading = result.loading;
        this.error = result.error;
      });
  }

}
