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
import { NotificationComponent } from './home/notifications/notification/notification.component';
import { ExpaindedChatComponent } from './home/chats/expainded-chat/expainded-chat.component';
import { ShortChatComponent } from './home/chats/short-chat/short-chat.component';
import { TestComponent } from './test/test.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SettingsComponent } from './home/settings/settings.component';
import { ProfileComponent } from './home/profile/profile.component';
import { SuggestionComponent } from './home/suggestions/suggestion/suggestion.component';
import { CreatedMatchesComponent } from './home/profile/created-matches/created-matches.component';
import { PlayedMatchesComponent } from './home/profile/played-matches/played-matches.component';
import { PlayersCercleComponent } from './home/profile/players-cercle/players-cercle.component';

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
    FiltersComponent,
    NotificationComponent,
    ExpaindedChatComponent,
    ShortChatComponent,
    TestComponent,
    SettingsComponent,
    ProfileComponent,
    SuggestionComponent,
    CreatedMatchesComponent,
    PlayedMatchesComponent,
    PlayersCercleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbCarouselModule,
    NgbModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
