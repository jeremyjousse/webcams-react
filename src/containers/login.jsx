// @flow

import React, { Component } from "react";
import { Card, Container, Grid } from "semantic-ui-react";

import { auth, provider } from "../config/firebase";

// import { connectUser } from "../actions";

import PageMenu from "../components/menu";

import styles from "../assets/css/main.css";

export default class Login extends Component {
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
    console.log(this.props.authentication);
    return (
      <div>
        {/* <PageMenu
          authentication={this.props.authentication}
          login={this.login}
          logout={this.logout}
        /> */}
        <Container className="ui main">
          <Grid>
            <Grid.Row>
              <Grid.Column width={16}>
                <h1>Login</h1>
                <div className="wrapper">
                  <h1>Fun Food Friends</h1>
                  {this.props.authentication.user.uid ? (
                    <button onClick={this.logout}>Log Out</button>
                  ) : (
                    <button onClick={this.login}>Log In</button>
                  )}
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
