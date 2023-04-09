import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './welcome/signup/signup.component';
import { LoginComponent } from './welcome/login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './welcome/about/about.component';
import { ContactComponent } from './welcome/contact/contact.component';
import { DefaultComponent } from './welcome/default/default.component';
import { ChatsComponent } from './home/chats/chats.component';
import { MyMatchesComponent } from './home/my-matches/my-matches.component';
import { FeedComponent } from './home/feed/feed.component';
import { CalendarComponent } from './home/calendar/calendar.component';
import { NewComponent } from './home/new/new.component';
import { SuggestionsComponent } from './home/suggestions/suggestions.component';
import { NotificationsComponent } from './home/notifications/notifications.component';
import { MatchComponent } from './home/my-matches/match/match.component';
import { SearchComponent } from './home/search/search.component';
import { FormsModule } from '@angular/forms';
import { FiltersComponent } from './home/search/filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DefaultComponent,
    ChatsComponent,
    MyMatchesComponent,
    FeedComponent,
    CalendarComponent,
    NewComponent,
    SuggestionsComponent,
    NotificationsComponent,
    MatchComponent,
    SearchComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
