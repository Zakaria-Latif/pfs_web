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
import { LocalStorageService } from './services/localStorage/local-storage.service';

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
    LocalStorageService,
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink, localStorageService: LocalStorageService) {
        const authHeader = `Bearer ${localStorageService?.getItem("token") ?? ""}`;
        const headers = new HttpHeaders().set('Authorization', authHeader);
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:3000/graphql',
            headers,
          }),
        };
      },
      
      deps: [HttpLink, LocalStorageService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
