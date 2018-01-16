// @flow

import React, { Component } from "react";
import { Button } from "semantic-ui-react";

import styles from "./../assets/css/cities.css";

export default class City extends Component {
  render() {
    return (
      <div className="city-container">
        <h3>
          <a href={this.props.cities.url} target="_blank">
            {this.props.cities.name}
          </a>
        </h3>
        <div className="webcam-image-container">
          <img
            src={this.props.cities.webcams[0].url}
            className="webcam-image"
          />
        </div>
      </div>
    );
  }
}
