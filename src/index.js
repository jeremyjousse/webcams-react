// @flow

import React, {Component} from 'react'
import {render} from 'react-dom'

import db from './config/firebase';

// import {updateList} from './actions/webcams'
import { Container } from 'semantic-ui-react'

import City from './components/city'

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { webcams: [] };
    }
    componentWillMount(){
        console.log('componentWillMount')
        db.collection("webcams").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                let webcam = doc.data();
                this.setState({ webcams: [webcam].concat(this.state.webcams) });
            });
        });
    }
    componentWillUnmount() {
        //db.messagesRef.on('value').off();
    }
    render() {
        const webcamList = Object.keys(this.state.webcams).map(
            key => (
             <li key={key} id={key}><City webcam={this.state.webcams[key]} /></li>
            )
        )        
        return (
            <Container>

                <h1>Hello Webcams!</h1>
                <ul>
                    {webcamList}
                    
                </ul>

            </Container>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessage: (webcams) => dispatch(updateList(webcams))
    };
}

render(<Index />, document.getElementById('app'))