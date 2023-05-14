import { createActionGroup, props } from '@ngrx/store';
import { Match } from 'src/utils/types/Match';

 
export const MatchsActions = createActionGroup({
  source: 'Matchs',
  events: {
    'Add Match': props<{ matchId: string }>(),
    'Remove Match': props<{ matchId: string }>(),
    
  },
});
 
export const MatchsApiActions = createActionGroup({
  source: 'Match API',
  events: {
    'Retrieved Matches List': props<{ matches: ReadonlyArray<Match> }>(),
    'Add Matches': props<{matches: Array<Match>}>()
  },
});