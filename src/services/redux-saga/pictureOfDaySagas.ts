import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchPODFailure, fetchPODSuccess } from "../redux/actions/pictureOfDayAction";
import { FETCH_POD_REQUEST } from "../redux/actionTypes";
import { getPODs } from "../api/pictureOfDayApi";

// function* callSafe<Fn extends (...args: any[]) => Generator>(fn: Fn, ...args: Parameters<Fn>)
// {
//   const result = yield call(fn,...args);
//   return result as Parameters<ReturnType<Fn>["return"]>[0];
// }

function* fetchPODSaga() {
  try {
    yield put( fetchPODSuccess({ pictureOfDay:  yield call(getPODs) }) );
  } catch (e) {
    yield put( fetchPODFailure({ error: e.message }) );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_POD_REQUEST` action.
  Allows concurrent increments.
*/

function* PODSaga() {
  yield all([takeLatest(FETCH_POD_REQUEST, fetchPODSaga)]);
}

export default PODSaga;