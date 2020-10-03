import { call, put, takeEvery, fork } from "redux-saga/effects";
import { SIGNUP_ACTIONS } from "./signupActions";
import axios from "axios";

function* postSignup(action) {
  try {
    const user = yield call(() => {
      axios.post("http://localhost:8000/account/signup", action, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
    });
    yield put({ type: SIGNUP_ACTIONS.SIGNUP_SAGA_SUCCESS });
  } catch (e) {
    console.log(e);
    //yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* signupSaga() {
  yield takeEvery(SIGNUP_ACTIONS.SIGNUP_SAGA, postSignup);
}

const SignupSaga = [fork(signupSaga)];

export default SignupSaga;
