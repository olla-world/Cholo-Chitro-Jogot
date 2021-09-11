import { all, takeLatest } from 'redux-saga/effects';

import { types } from './actions';
import { fetchGenres } from './queries';

function* saga(){
    yield all([takeLatest(types.GENRES_FETCH, fetchGenres)]);
}

export default saga;