import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
// import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { InMemoryCache } from '@apollo/client/core';
import { StoreModule } from '@ngrx/store';

// ng generate module welcome/services --route services --module welcome.module
@NgModule({
  declarations: [
    // For testing
    TestComponent,
    AppComponent
  ],
  imports: [
    ApolloModule, HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
  ],

  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        //we 'll change it later
        // const token = localStorage.getItem('token');
        const authHeader = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRpd2Vlenl5cm9zIiwic3ViIjoyOCwiaWF0IjoxNjg0MDU4MzgyLCJleHAiOjE2ODQxNDQ3ODJ9.AIdJwz5ZTHjB6U28FroyVgXB3y0cHF5mJkiFkGgkwKU';
        const headers = new HttpHeaders().set('Authorization', authHeader);
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:3000/graphql',
            headers,
          }),
        };
      },
      
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
