import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayedMatchesComponent } from './played-matches.component';

const routes: Routes = [{ path: '', component: PlayedMatchesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayedMatchesRoutingModule { }
