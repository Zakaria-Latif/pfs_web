import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
    { 
        path: '', component: HomeComponent,
        children: [
            { path: "", loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule)   },
            { path: "feed",  loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule) },
            { path: "chats",  loadChildren: () => import('./chats/chats.module').then(m => m.ChatsModule) },
            { path: "expainded-chat/:id",  loadChildren: () => import('./chats/expainded-chat/expainded-chat.module').then(m => m.ExpaindedChatModule) },
            { path: "calendar",  loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule) },
            { path: "matches-list", loadChildren: () => import('./calendar/matches-list/matches-list.module').then(m => m.MatchesListModule) },
            { path: "my-matches",  loadChildren: () => import('./my-matches/my-matches.module').then(m => m.MyMatchesModule) },
            { path: "new", loadChildren: () => import('./new/new-module').then(m => m.NewModule)  },
            { path: "notifications", loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule)  },
            { path: "suggestions", loadChildren: () => import('./suggestions/suggestions.module').then(m => m.SuggestionsModule) },
            { path: "search", loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
            { path: "settings", loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
            { path: "players-circle", loadChildren: () => import('./players/players.module').then(m => m.PlayersModule) },
            { path: "profile", loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
            { path: "**", loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule)   },
          ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
