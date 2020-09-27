// Types
import {
  FETCH_STARSHIPS_ASYNC,
  FILL_STARSHIPS,
  START_FETCHING,
  STOP_FETCHING,
  Starships,
  StarshipActionTypes,
} from './types';

export type FeedState = {
  starships: Starships;
  isFetching: boolean;
};

const initialState: FeedState = {
  starships: {
    status: [],
  },
  isFetching: false,
};

export const feedReducer = (
  state = initialState,
  action: StarshipActionTypes,
): FeedState => {
  switch (action.type) {
    case START_FETCHING:
      return { ...state, isFetching: true };

    case STOP_FETCHING:
      return { ...state, isFetching: false };

    case FILL_STARSHIPS:
      return {
        ...state,
        starships: {
          ...action.payload,
        },
      };
    case FETCH_STARSHIPS_ASYNC:
      return state;

    default:
      // eslint-disable-next-line
      const x: never = action;
  }

  return state;
};
