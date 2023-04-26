import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
    { 
        path: '',
        component: ProfileComponent, 
        // loadChildren: () => import('./created-matches/created-matches.module').then(m => m.CreatedMatchesModule),
        children: [
            { 
                path: "", 
                loadChildren: () => import('./created-matches/created-matches.module').then(m => m.CreatedMatchesModule), 
            },
            { 
                path: "created-matches",
                loadChildren: () => import('./created-matches/created-matches.module').then(m => m.CreatedMatchesModule), 
            },
            { 
                path: "played-matches",
                loadChildren: () => import('./played-matches/played-matches.module').then(m => m.PlayedMatchesModule),
            },
            { 
                path: "players-cercle", 
                loadChildren: () => import('./players-cercle/players-cercle.module').then(m => m.PlayersCercleModule),
            },
          ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
