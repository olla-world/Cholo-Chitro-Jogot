import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { default as genres } from '../pages/Home/reducers';
import { default as genre_popular_movies } from '../pages/GenreDetail/reducers';
import { default as movie_detail } from '../pages/MovieDetail/reducers';

const createRootReducers = history =>
  combineReducers({
    genres,
    genre_popular_movies,
    movie_detail,
    router: connectRouter(history)
  });

export default createRootReducers;
