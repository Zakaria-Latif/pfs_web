import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Match } from 'src/utils/types/Match';
 
export const selectMatchesState = createFeatureSelector<ReadonlyArray<Match>>('matches');
 
export const selectAllMatches = createSelector(
  selectMatchesState,
  (matches) => matches
);
 
// export const selectMatchById = createSelector(
//   selectMatchesState,
//   (matches, props) => matches.find((match) => match.id === props.matchId)
// );
