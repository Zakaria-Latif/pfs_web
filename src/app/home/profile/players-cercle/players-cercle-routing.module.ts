import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersCercleComponent } from './players-cercle.component';

const routes: Routes = [{ path: '', component: PlayersCercleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersCercleRoutingModule { }
