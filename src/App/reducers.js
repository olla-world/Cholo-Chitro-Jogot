import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { default as genres } from '../pages/Home/reducers';
import { default as genre_popular_movies} from '../pages/GenreDetail/reducers';

const createRootReducers = history =>
  combineReducers({
    genre_popular_movies,
    genres,
    router: connectRouter(history)
  });

export default createRootReducers;
