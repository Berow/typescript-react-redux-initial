// Types
import { types, StarshipActionTypes, Starships } from './types';

export const feedActions = {
    // Sync
    startFetching: (): StarshipActionTypes => {
        return {
            type: types.START_FETCHING
        };
    },
    stopFetching: (): StarshipActionTypes => {
        return {
            type: types.STOP_FETCHING
        };
    },
    fillStarships: (starships: Starships): StarshipActionTypes => {
        return {
            type: types.FILL_STARSHIPS,
            payload: starships,
        };
    },
    // Async
    fetchStarshipsAsync: (): StarshipActionTypes => {
        return {
            type: types.FETCH_STARSHIPS_ASYNC,
        };
    },
};
