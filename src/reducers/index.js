// @flow
import { combineReducers } from "redux";
// import { routerReducer as router } from 'react-router-redux'
// import counter from './counter'
import userReducer from "./user";

const rootReducer = combineReducers({
  // counter,
  user: userReducer
  // router
});

export default rootReducer;
