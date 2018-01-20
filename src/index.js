// @flow

import React, { Component } from "react";
import { render } from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import appReducer from "./reducers";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./containers/home";
import LoginConnected from "./containers/loginConnected";

import styles from "./assets/css/main.css";
import { connectUser } from "./actions/index";

let store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginConnected} />
          </div>
        </Router>
      </Provider>
    );
  }
}

render(<Index />, document.getElementById("app"));
