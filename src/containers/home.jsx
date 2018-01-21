// @flow

import React, { Component } from "react";
import { Card, Container, Grid } from "semantic-ui-react";

import { db } from "../config/firebase";

import City from "../components/city";

import styles from "../assets/css/main.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { cities: [] };
  }
  componentWillMount() {
    db
      .collection("cities")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let city = doc.data();
          if (city.webcams != null && city.webcams.length > 0) {
            this.setState({ cities: [city].concat(this.state.cities) });
          }
        });
      });
  }
  componentWillUnmount() {
    //db.messagesRef.on('value').off();
  }
  render() {
    const cityList = Object.keys(this.state.cities).map(key => (
      <City key={key} cities={this.state.cities[key]} />
    ));
    return (
      <div>
        <Container className="ui main">
          <Grid>
            <Grid.Row>
              <Grid.Column width={16}>
                <h1>Hello Webcams!</h1>
                {cityList}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
