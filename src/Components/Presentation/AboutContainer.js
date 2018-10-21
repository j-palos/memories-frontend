import React, {Component} from 'react';
import {Row} from 'reactstrap';

const ip = "http://dateapi.sabrinaherrero.com";

export default class AboutContainer extends Component {

    constructor() {
        super();
        this.state = {
            dates: [],
            loaded: false
        }
    }

    componentDidMount()
    {
        let objects = [];
        fetch(`${ip}/date`).then(results => {
            return results.json();
        })
            .then(data => {
                    let numObjects = data.num_results;
                    for(let i = 0; i < numObjects; i++){
                        objects.push(data.objects[i]);
                    }
                    this.setState({
                        dates: objects,
                        loaded: true
                    })
                }
            )
    }

    render() {
        return (
            <div>
            <Row>
                About page here
                Data shown here
            </Row>
            <Row>
                <p>
                    {/*{this.state.dates}*/}
                </p>
                </Row>
            </div>
        );
    }
}
