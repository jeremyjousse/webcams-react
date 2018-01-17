// @flow

import { Container } from "semantic-ui-react";
import React, { Component } from "react";
import { render } from "react-dom";
import { Card, Grid } from 'semantic-ui-react'

import db from "./config/firebase";

// import {updateList} from './actions/webcams'

import City from "./components/city";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { cities: [] };
  }
  componentWillMount() {
    console.log("componentWillMount");
    db
      .collection("cities")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(`${doc.id} => ${doc.data()}`);
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
      <Card fluid color='red' header='Option 1' key={key} id={key}>
        <City cities={this.state.cities[key]} />
      </Card>
    ));
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
        <h1>Hello Webcams!</h1>
        <Card.Group>
          {cityList}
        </Card.Group>
        </Grid.Column>
        </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateMessage: webcams => dispatch(updateList(webcams))
  };
};

render(<Index />, document.getElementById("app"));
