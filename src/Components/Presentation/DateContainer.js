import React, {Component} from 'react';
import {Row,Col} from 'reactstrap';
import DatesTable from '../DatesTable'
const ip = "http://dateapi.sabrinaherrero.com";

export default class DateContainer extends Component {

    constructor() {
        super();
        this.state = {
            dates: [],
            loaded: false,
        };
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

        render()
        {
            return (
                <Row>
                    <Col sm={2}>
                    </Col>
                    <Col>
                        <h2 className={'text-center '}>Possible Date Ideas</h2>
                        {this.state.loaded && <DatesTable dates={this.state.dates} name={'Dates'}/>}
                    </Col>
                    <Col sm={2}>
                    </Col>
                </Row>
            );
        }

}

