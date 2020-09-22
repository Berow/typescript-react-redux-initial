
// Sync
export const FILL_PROFILE = 'FILL_PROFILE';
export const START_FETCHING = 'START_FETCHING';
export const STOP_FETCHING = 'STOP_FETCHING';


export type Profile = {
    firstName: string,
    lastName: string,
}

type StartProfileFetchingAction = {
    type: typeof START_FETCHING;
};

type StopProfileFetchingAction = {
    type: typeof STOP_FETCHING;
};

type FillProfileAction = {
    type: typeof FILL_PROFILE,
    payload: Profile;
};

export type ProfileActionTypes =
    | StartProfileFetchingAction
    | StopProfileFetchingAction
    | FillProfileAction;
