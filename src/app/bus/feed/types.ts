export const types = {
    // Sync
    START_FETCHING: 'START_FETCHING',
    STOP_FETCHING: 'STOP_FETCHING',
    FILL_STARSHIPS: 'FILL_STARSHIPS',
    // Async
    FETCH_STARSHIPS_ASYNC: 'FETCH_STARSHIPS_ASYNC',
};

type StartFetchingAction = {
    type: typeof types.START_FETCHING;
};

type StopFetchingAction = {
    type: typeof types.STOP_FETCHING;
};

type FillStarshipsAction = {
    type: typeof types.FILL_STARSHIPS,
    payload: Starships;
};

type FetchStarshipsAsyncAction = {
    type: typeof types.FETCH_STARSHIPS_ASYNC,
};

export type Starship = {
    name: string;
};

export type Starships = {
    status: Starship[];
};

export type StarshipActionTypes =
    | StartFetchingAction
    | StopFetchingAction
    | FillStarshipsAction
    | FetchStarshipsAsyncAction;