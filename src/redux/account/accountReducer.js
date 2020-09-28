import { ACCOUNT_ACTIONS } from "./accountActions";
import { AccountAuthenticationTypes } from "../../enums/account";

export const accountReducer = (
  state = {
    accountAuthenticationTypes: AccountAuthenticationTypes.Signin,
  },
  action
) => {
  switch (action.type) {
    case ACCOUNT_ACTIONS.CHANGE_AUTHENTICATION_TYPE:
      return {
        ...state,
        accountAuthenticationTypes: action.payload,
      };
    case ACCOUNT_ACTIONS.UNLOADED:
      return {};
    default:
      return state;
  }
};
