import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsComponent } from './chats.component';
import { ChatsRoutingModule } from './chats-routing.module';
import { ShortChatComponent } from './short-chat/short-chat.component';


@NgModule({
  declarations: [
    ChatsComponent,
    ShortChatComponent
  ],
  imports: [
    CommonModule,
    ChatsRoutingModule
  ]
})
export class ChatsModule { }