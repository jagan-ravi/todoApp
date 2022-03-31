import { call, put } from "redux-saga/effects";
import { requestGetData } from "../requests/data";
import { set_data } from "../../ducks/data";
export function* handleGetData(action) {
  try {
    const response = yield call(requestGetData);
    const { data } = response;
    yield put(set_data(data));
  } catch (error) {
    console.log(error);
  }
}
