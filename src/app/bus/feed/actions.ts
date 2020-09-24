// Types
import {
  FETCH_STARSHIPS_ASYNC,
  FILL_STARSHIPS,
  START_FETCHING,
  STOP_FETCHING,
  StarshipActionTypes,
  Starships,
} from './types';

export const feedActions = {
  // Sync
  startFetching: (): StarshipActionTypes => ({
    type: START_FETCHING,
  }),
  stopFetching: (): StarshipActionTypes => ({
    type: STOP_FETCHING,
  }),
  fillStarships: (starships: Starships): StarshipActionTypes => ({
    type: FILL_STARSHIPS,
    payload: starships,
  }),
  // Async
  fetchStarshipsAsync: (): StarshipActionTypes => ({
    type: FETCH_STARSHIPS_ASYNC,
  }),
};
