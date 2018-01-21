import { CONNECT_USER, LOGOUT_USER } from "./actionTypes";

export const connectUser = user => {
  return {
    type: CONNECT_USER,
    user
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  };
};
