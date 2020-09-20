export const types = {
    // Sync
    FILL_PROFILE: 'FILL_PROFILE',
    START_FETCHING: 'START_FETCHING',
    STOP_FETCHING: 'STOP_FETCHING',
};

export type Profile = {
    name: string;
}

type StartProfileFetchingAction = {
    type: typeof types.START_FETCHING;
};

type StopProfileFetchingAction = {
    type: typeof types.STOP_FETCHING;
};

type FillProfileAction = {
    type: typeof types.FILL_PROFILE,
    payload: Starships;
};

export type ProfileActionTypes =
    | StartProfileFetchingAction
    | StopProfileFetchingAction
    | FillProfileAction;
