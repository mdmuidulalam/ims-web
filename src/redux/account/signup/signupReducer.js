import { SIGNUP_ACTIONS } from "./signupActions";

export const signupReducer = (
  state = {
    fullName: "",
    email: "",
    password: "",
  },
  action
) => {
  switch (action.type) {
    case SIGNUP_ACTIONS.UPDATE_STATE:
      return {
        ...state,
        [action.key]: action.payload,
      };
    case SIGNUP_ACTIONS.SIGNUP:
      return {
        ...state,
      };
    case SIGNUP_ACTIONS.UNLOAD:
      return {};
    default:
      return state;
  }
};
