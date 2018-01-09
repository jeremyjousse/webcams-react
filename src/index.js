import React, {Component} from 'react'
import {render} from 'react-dom'

export default class Index extends Component {
    render() {
        return (
            <div>
                Hello Webcams!
            </div>
        )
    }
}

render(<Index />, document.getElementById('app'))