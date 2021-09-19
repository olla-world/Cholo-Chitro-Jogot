import { all, takeLatest, takeEvery } from 'redux-saga/effects';

import { types } from './actions';
import { fetchGenres, fetchCommonMovies } from './queries';

function* saga(){
    yield all([
        takeEvery(types.COMMON_MOVIES_FETCH, fetchCommonMovies),
        takeLatest(types.GENRES_FETCH, fetchGenres),
    ]);
}

export default saga;