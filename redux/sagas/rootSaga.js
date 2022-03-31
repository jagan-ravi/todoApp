import { takeLatest } from "redux-saga/effects";
import { GET_DATA } from "../ducks/data";
import { handleGetData } from "./handlers/data";
export function* watcherSaga() {
    yield takeLatest(GET_DATA, handleGetData);

}