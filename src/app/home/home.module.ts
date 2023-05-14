import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FiltersComponent } from './search/filters/filters.component';
import { CompletionsModule } from './search/completions/completions.module';


@NgModule({
  declarations: [
    HomeComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CompletionsModule
  ]
})
export class HomeModule { }
