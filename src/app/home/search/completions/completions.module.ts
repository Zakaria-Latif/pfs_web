import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletionsComponent } from './completions.component';




@NgModule({
  declarations: [
    CompletionsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [CompletionsComponent]
})
export class CompletionsModule { }
