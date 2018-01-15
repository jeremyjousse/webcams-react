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
        this.state = { cities: [] };
    }
    componentWillMount(){
        console.log('componentWillMount')
        db.collection("cities").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                let city = doc.data();
                this.setState({ cities: [city].concat(this.state.cities) });
            });
        });
    }
    componentWillUnmount() {
        //db.messagesRef.on('value').off();
    }
    render() {
        const cityList = Object.keys(this.state.cities).map(
            key => (
             <li key={key} id={key}><City cities={this.state.cities[key]} /></li>
            )
        )
        return (
            <Container>

                <h1>Hello Webcams!</h1>
                <ul>
                    {cityList}

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
