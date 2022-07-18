import { CHANGE_NAME, TOGGLE_CHECKBOX, SIGN_IN, SIGN_OUT } from "./actions";

const initialState = {
  checkbox: false,
  name: "User",
  authed: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHECKBOX:
      return {
        ...state,
        checkbox: !state.checkbox,
      };
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SIGN_IN:
      return {
        ...state,
        authed: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        authed: false,
      };
    default:
      return state;
  }
};
