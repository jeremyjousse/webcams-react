import React, {Component} from 'react'
import {render} from 'react-dom'
import db from './config/firebase';

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
                let webcam = { name: doc.data().name, id: doc.id };
                this.setState({ webcams: [webcam].concat(this.state.webcams) });
            });
        });
    }
    render() {
        return (
            <div>
                Hello Webcams!
                
                <ul>
          {
            this.state.webcams.map(
                webcam => <li key={webcam.name}>{webcam.name}</li>
            )
          }
                    </ul>
            </div>
        )
    }
}

render(<Index />, document.getElementById('app'))