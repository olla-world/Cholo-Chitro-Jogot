import { handleActions } from "redux-actions";

import { types } from "./actions";

const initialState = { genre_popular_movies: [], loading: false };

const reducers = handleActions({
    [types.POPULAR_MOVIES_FETCH]: (state, action) => ({
        ...state,
        genre_popular_movies: [],
        loading: true
    }),

    [types.POPULAR_MOVIES_RECEIVED]: (state, action) => ({
        ...state,
        genre_popular_movies: action.payload.genre_popular_movies,
        loading: false
    }),

    [types.POPULAR_MOVIES_FETCH_FAIL]: (state, action) => ({
        ...state,
        genre_popular_movies: [],
        loading: false
    })
}, initialState);

export default reducers;