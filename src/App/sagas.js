import { all } from 'redux-saga/effects';

import { default as genres } from '../pages/Home/sagas';
import { default as genre_popular_movies} from '../pages/GenreDetail/sagas';

function* rootSaga() {
  yield all([genres(), genre_popular_movies()]);
}

export default rootSaga;