import { all } from 'redux-saga/effects';

import { default as genres } from '../pages/Home/sagas';
import { default as genre_popular_movies} from '../pages/GenreDetail/sagas';
import { default as movie_detail } from '../pages/MovieDetail/sagas';

function* rootSaga() {
  yield all([
    genres(), 
    genre_popular_movies(), 
    movie_detail(),
  ]);
}

export default rootSaga;