import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import createRootReducers from './reducers';
import rootSaga from './sagas';

const initialStore = {};
const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createRootReducers(history),
  initialStore,
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

export default store;

export { history };
