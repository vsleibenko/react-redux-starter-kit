import {
  takeLatest,
  put,
} from 'redux-saga/effects';
import { userActions } from '../actions';

// WORKERS

function* loginWorker() {
  try {
    yield put(userActions.login.success());
  } catch (error) {
    yield put(userActions.login.failure(error));
  }
}

// WATCHERS

function* loginWatcher() {
  yield takeLatest(userActions.login.call, loginWorker);
}

export {
  loginWatcher,
};
