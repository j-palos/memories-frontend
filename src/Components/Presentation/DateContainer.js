import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import DatesTable from '../DatesTable'

const ip = "http://dateapi.sabrinaherrero.com";

export default class DateContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dates: [],
            loaded: false,
        };
    }

        componentDidMount()
        {
            let objects = [];
            fetch(`${ip}/date?q={"filters":[{"or":[{"name":"completed","op":"eq","val":false}]}]} `).then(results => {
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

