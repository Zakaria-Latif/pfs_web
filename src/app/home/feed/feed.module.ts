import { CommonModule } from "@angular/common";
import { FeedRoutingModule } from "./feed-routing.module";
import { FeedComponent } from "./feed.component";
import { NgModule } from "@angular/core";
import { MatchComponent } from "../my-matches/match/match.component";
import { MatchModule } from "../my-matches/match/match.module";



@NgModule({
  declarations: [
    FeedComponent,
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    MatchModule
  ]
})
export class FeedModule { }