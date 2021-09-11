import { all, takeLatest } from 'redux-saga/effects';

import { types } from './actions';
import { fetchPopularMovies } from './queries';

function* saga(){
    yield all([takeLatest(types.POPULAR_MOVIES_FETCH, fetchPopularMovies)]);
}

export default saga;