import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'

import styles from './../assets/css/cities.css';

export default class City extends Component {
    render() {
        return (
            <div>
                {this.props.cities.name}
                <div className="webcam-image-container">
                  <img src={this.props.cities.webcams[0].url} className="webcam-image"/>
                </div>
            </div>
        )
    }
}
