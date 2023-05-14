import { createReducer, on } from '@ngrx/store';
import { MatchsActions, MatchsApiActions } from './my-matches.actions';
import { Match } from 'src/utils/types/Match';


export const initialState: ReadonlyArray<Match> = [];

export const matchesReducer = createReducer(
  initialState,
  on(MatchsApiActions.retrievedMatchesList, (_state, { matches }) => matches),
  on(MatchsApiActions.addMatches, (_state, { matches })=>_state.concat(matches))
);