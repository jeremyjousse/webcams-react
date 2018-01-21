// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { auth, provider } from "../config/firebase";

import styles from "./../assets/css/menu.css";

import PageMenu from "../components/menu.jsx";

import { connectUser, logoutUser } from "../actions";

class PageHeader extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.props.connectUser(user);
      }
    });
  }
  handleChange(e) {}
  logout() {
    auth.signOut().then(() => {
      this.props.logoutUser();
    });
  }
  login() {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.props.connectUser(user);
    });
  }
  render() {
    return (
      <div>
        <PageMenu
          authentication={this.props.authentication}
          login={this.login}
          logout={this.logout}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { authentication: state.authentication };
};

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({ connectUser, logoutUser }, dispatch);

const PageMenuConneced = connect(mapStateToProps, mapDispatchToProps)(
  PageHeader
);

export default PageMenuConneced;
