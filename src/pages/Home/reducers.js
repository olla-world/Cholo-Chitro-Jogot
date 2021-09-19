import { handleActions } from "redux-actions";

import { types } from "./actions";

const initialState = { 
    genres: [], 
    common_movies:{},
    loading: false, 
};

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
    }),

    [types.COMMON_MOVIES_FETCH]: (state, action) => ({
        ...state,
        loading: true
    }),

    [types.COMMON_MOVIES_RECEIVED]: (state, action) => ({
        ...state,
        common_movies: {...state.common_movies, ...action.payload.common_movies},
        loading: false
    }),

    [types.COMMON_MOVIES_FETCH_FAIL]: (state, action) => ({
        ...state,
        loading: false
    })
}, initialState);

export default reducers;