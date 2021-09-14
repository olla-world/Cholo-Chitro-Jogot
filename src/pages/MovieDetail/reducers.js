import { handleActions } from "redux-actions";

import { types } from "./actions";

const initialState = { movie_detail: null, loading: false };

const reducers = handleActions({
    [types.MOVIE_DETAIL_FETCH]: (state, action) => ({
        ...state,
        movie_detail: null,
        loading: true
    }),

    [types.MOVIE_DETAIL_RECEIVED]: (state, action) => ({
        ...state,
        movie_detail: action.payload.movie_detail,
        loading: false
    }),

    [types.MOVIE_DETAIL_FETCH_FAIL]: (state, action) => ({
        ...state,
        movie_detail: null,
        loading: false
    })
}, initialState);

export default reducers;