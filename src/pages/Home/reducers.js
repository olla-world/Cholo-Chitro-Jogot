import { handleActions } from "redux-actions";

import { types } from "./actions";

const initialState = { genres: [], loading: false };

const reducers = handleActions({
    [types.GENRES_FETCH]: (state, action) => ({
        ...state,
        genres: [],
        loading: true
    }),

    [types.GENRES_RECEIVED]: (state, action) => ({
        ...state,
        genres: action.payload.genres,
        loading: false
    }),

    [types.GENRES_FETCH_FAIL]: (state, action) => ({
        ...state,
        genres: [],
        loading: false
    })
}, initialState);

export default reducers;