import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatedMatchesComponent } from './created-matches.component';

const routes: Routes = [{ path: '', component: CreatedMatchesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatedMatchesRoutingModule { }
