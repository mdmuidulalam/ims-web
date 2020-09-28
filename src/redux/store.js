import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { signinReducer } from "./account/signin/signinReducer";
import { accountReducer } from "./account/accountReducer";

export const store = createStore(
  combineReducers({
    signin: signinReducer,
    account: accountReducer,
  }),
  composeWithDevTools()
);
