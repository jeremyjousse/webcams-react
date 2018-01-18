// @flow

import React, { Component } from "react";
import { Card, Container, Grid } from "semantic-ui-react";

// import db from "../config/firebase";

// import City from "../components/city";
import PageMenu from "../components/menu";

import styles from "../assets/css/main.css";

export default class Login extends Component {
  render() {
    return (
      <div>
        <PageMenu />
        <Container className="ui main">
          <Grid>
            <Grid.Row>
              <Grid.Column width={16}>
                <h1>Login</h1>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
