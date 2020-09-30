import { SIGNIN_ACTIONS } from "./signinActions";

export const signinReducer = (
  state = {
    username: "",
    password: "",
  },
  action
) => {
  switch (action.type) {
    case SIGNIN_ACTIONS.UPDATE_STATE:
      return {
        ...state,
        [action.key]: action.payload,
      };
    case SIGNIN_ACTIONS.SIGNIN:
      return {
        ...state,
      };
    case SIGNIN_ACTIONS.UNLOAD:
      return {};
    default:
      return state;
  }
};
