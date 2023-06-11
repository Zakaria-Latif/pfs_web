import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpaindedChatComponent } from './expainded-chat.component';
import { ExpaindedChatRoutingModule } from './expainded-chat-routing.module';


@NgModule({
  declarations: [
    ExpaindedChatComponent
  ],
  imports: [
    CommonModule,
    ExpaindedChatRoutingModule
  ]
})
export class ExpaindedChatModule { }