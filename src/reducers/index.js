// @flow
import { combineReducers } from "redux";
// import { routerReducer as router } from 'react-router-redux'
import authenticationReducer from "./authentication";
import userReducer from "./user";

const rootReducer = combineReducers({
  // counter,
  authentication: authenticationReducer,
  user: userReducer
  // router
});

export default rootReducer;
