import React, {Component} from 'react'

export default class City extends Component {
    render() {
        return (
            <div>
                {this.props.webcam.name}
            </div>
        )
    }
}