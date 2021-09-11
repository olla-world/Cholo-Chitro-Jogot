import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { default as genres } from '../pages/Home/reducers';

const createRootReducers = history =>
  combineReducers({
    genres,
    router: connectRouter(history)
  });

export default createRootReducers;
