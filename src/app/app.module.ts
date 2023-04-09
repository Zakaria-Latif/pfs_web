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
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
