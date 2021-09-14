import { all, takeLatest } from 'redux-saga/effects';

import { types } from './actions';
import { fetchMovieDetail } from './queries';

function* saga(){
    yield all([takeLatest(types.MOVIE_DETAIL_FETCH, fetchMovieDetail)]);
}

export default saga;