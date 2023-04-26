import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpaindedChatComponent } from './expainded-chat.component';

const routes: Routes = [{ path: '', component: ExpaindedChatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpaindedChatRoutingModule { }