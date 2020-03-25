import { all } from 'redux-saga/effects';
import * as userSagas from './user';

export default function* rootSaga() {
  yield all([
    // USER
    userSagas.loginWatcher(),
  ]);
}
