import { all } from 'redux-saga/effects';

import { default as genres } from '../pages/Home/sagas';

function* rootSaga() {
  yield all([genres()]);
}

export default rootSaga;