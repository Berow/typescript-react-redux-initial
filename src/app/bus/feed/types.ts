
// Sync
export const START_FETCHING = 'START_FETCHING';
export const STOP_FETCHING = 'STOP_FETCHING';
export const FILL_STARSHIPS = 'FILL_STARSHIPS';
// Async
export const FETCH_STARSHIPS_ASYNC = 'FETCH_STARSHIPS_ASYNC';


type StartFetchingAction = {
    type: typeof START_FETCHING;
};

type StopFetchingAction = {
    type: typeof STOP_FETCHING;
};

type FillStarshipsAction = {
    type: typeof FILL_STARSHIPS,
    payload: Starships;
};

type FetchStarshipsAsyncAction = {
    type: typeof FETCH_STARSHIPS_ASYNC,
};

export type Starship = {
    name: string;
};

export type Starships = {
    status: Starship[];
};

export type StarshipActionTypes =
    | FillStarshipsAction
    | StopFetchingAction
    | StartFetchingAction
    | FetchStarshipsAsyncAction;