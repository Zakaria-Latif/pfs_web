import { CommonModule } from "@angular/common";
import { FeedRoutingModule } from "./feed-routing.module";
import { FeedComponent } from "./feed.component";
import { NgModule } from "@angular/core";
import { MatchComponent } from "../my-matches/match/match.component";
import { MatchModule } from "../my-matches/match/match.module";
import { PlayerModule } from "../players/player/player.module";



@NgModule({
  declarations: [
    FeedComponent,
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    MatchModule,
    PlayerModule
  ]
})
export class FeedModule { }