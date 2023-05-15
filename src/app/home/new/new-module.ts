import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewComponent } from './new.component';
import { NewRoutingModule } from './new-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule,
    FormsModule
  ]
})
export class NewModule { }