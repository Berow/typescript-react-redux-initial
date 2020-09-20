// Types
import { types, ProfileActionTypes, Profile } from './types';

export const profileActions = {
    // Sync
    fillProfile: (profile: Profile): ProfileActionTypes => {
        return {
            type: types.FILL_PROFILE,
            payload: profile
        };
    },
    startFetching: (): ProfileActionTypes => {
        return {
            type: types.START_FETCHING,
        };
    },
    stopFetching: (): ProfileActionTypes => {
        return {
            type: types.STOP_FETCHING,
        };
    },
};
