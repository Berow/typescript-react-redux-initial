// Types
import {
  FILL_PROFILE,
  START_FETCHING,
  STOP_FETCHING,
  ProfileActionTypes,
  Profile,
} from './types';

export const profileActions = {
  // Sync
  fillProfile: (profile: Profile): ProfileActionTypes => ({
    type: FILL_PROFILE,
    payload: profile,
  }),
  startFetching: (): ProfileActionTypes => ({
    type: START_FETCHING,
  }),
  stopFetching: (): ProfileActionTypes => ({
    type: STOP_FETCHING,
  }),
};
