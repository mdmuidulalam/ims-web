import { all } from "redux-saga/effects";
import SignupSaga from "./account/signup/signupSaga";

export default function* rootSaga() {
  yield all([...SignupSaga]);
}
