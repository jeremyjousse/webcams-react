import { CONNECT_USER, LOGOUT_USER } from "../actions/actionTypes";

const initialState = {
  user: {}
};

export default function authenticationReducer(state?, action) {
  if (typeof state === "undefined") {
    return initialState;
  }
  switch (action.type) {
    case CONNECT_USER:
      let connectedUser = action.user;
      return { ...state, user: connectedUser };
    case LOGOUT_USER:
      let nullUser = {};
      return { ...state, user: nullUser };
    default:
      return state;
  }
}
