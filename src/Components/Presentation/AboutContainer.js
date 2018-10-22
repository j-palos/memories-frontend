import React, {Component} from 'react';
import {Row} from 'reactstrap';

const ip = "http://dateapi.sabrinaherrero.com";

export default class AboutContainer extends Component {

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
