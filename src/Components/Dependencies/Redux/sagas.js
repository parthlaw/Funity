import { call, put, takeLatest, all } from "redux-saga/effects";
import callAPI from "../Apisauce/itunes";
function* fetchSong(action) {
  try {
    const songResults = yield call(callAPI, action.searchString);
    yield put({ type: "GET_SONG_SUCCEDED", songResults: songResults });
  } catch (e) {
    yield put({ type: "GET_SONG_FAILED", message: e.message });
  }
}
function* mySaga() {
  yield takeLatest("GET_SONG", fetchSong);
}
export default function* rootSaga() {
  yield all([mySaga()]);
}
