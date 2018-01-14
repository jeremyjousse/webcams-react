import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'

export default class City extends Component {
    render() {
        return (
            <div>
                {this.props.webcam.name}
                <img src={this.props.webcam.thumb} />
            </div>
        )
    }
}