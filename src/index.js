// @flow

import React, { Component } from "react";
import { render } from "react-dom";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./containers/home";
import Login from "./containers/Login";

import styles from "./assets/css/main.css";

export default class Index extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

render(<Index />, document.getElementById("app"));
