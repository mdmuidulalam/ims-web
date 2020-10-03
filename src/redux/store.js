import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { signinReducer } from "./account/signin/signinReducer";
import { signupReducer } from "./account/signup/signupReducer";
import { accountReducer } from "./account/accountReducer";

import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    signin: signinReducer,
    account: accountReducer,
    signup: signupReducer,
  }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
