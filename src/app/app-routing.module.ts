import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './welcome/login/login.component';
import { SignupComponent } from './welcome/signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './welcome/contact/contact.component';
import { AboutComponent } from './welcome/about/about.component';
import { DefaultComponent } from './welcome/default/default.component';
import { FeedComponent } from './home/feed/feed.component';
import { ChatsComponent } from './home/chats/chats.component';
import { CalendarComponent } from './home/calendar/calendar.component';
import { MyMatchesComponent } from './home/my-matches/my-matches.component';
import { NewComponent } from './home/new/new.component';
import { NotificationsComponent } from './home/notifications/notifications.component';
import { SuggestionsComponent } from './home/suggestions/suggestions.component';
import { SearchComponent } from './home/search/search.component';
import { ShortChatComponent } from './home/chats/short-chat/short-chat.component';
import { ExpaindedChatComponent } from './home/chats/expainded-chat/expainded-chat.component';

const routes: Routes = [
  { path: "", redirectTo: "/welcome", pathMatch: 'full' },
  { 
    path: "welcome", component: WelcomeComponent,
    children: [
      {path: '', component: DefaultComponent}, 
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent}, 
      {path: 'login', component: LoginComponent}, 
      {path: 'signup', component: SignupComponent}, 
    ]
  },
  { 
    path: "home", component: HomeComponent ,
    children: [
      { path: "", component: FeedComponent },
      { path: "feed", component: FeedComponent },
      { path: "chats", component: ChatsComponent },
      { path: "expainded-chat", component: ExpaindedChatComponent },
      { path: "calendar", component: CalendarComponent },
      { path: "my-matches", component: MyMatchesComponent },
      { path: "new", component: NewComponent },
      { path: "notifications", component: NotificationsComponent },
      { path: "suggestions", component: SuggestionsComponent },
      { path: "search", component: SearchComponent },
    ]
    
  },
  { path: "**", component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
