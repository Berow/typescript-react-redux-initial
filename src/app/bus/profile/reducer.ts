// Types
import {
  FILL_PROFILE,
  START_FETCHING,
  STOP_FETCHING,
  ProfileActionTypes,
  Profile,
} from './types';

export type ProfileState = {
  profile: Profile;
  isFetching: boolean;
};

const initialState: ProfileState = {
  profile: {
    firstName: 'Уолтер',
    lastName: 'Уайт',
  },
  isFetching: false,
};

export const profileReducer = (
  state = initialState,
  action: ProfileActionTypes,
): ProfileState => {
  switch (action.type) {
    case FILL_PROFILE:
      return { ...state, ...action.payload };

    case START_FETCHING:
      return { ...state, isFetching: true };

    case STOP_FETCHING:
      return { ...state, isFetching: false };

    default:
      // eslint-disable-next-line no-case-declarations
      const x: never = action;
  }
  return state;
};
