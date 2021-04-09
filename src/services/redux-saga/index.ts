import { all, fork } from "redux-saga/effects";

import PODSaga from "./pictureOfDaySagas";

export function* rootSaga() {
  yield all([fork(PODSaga)]);
}