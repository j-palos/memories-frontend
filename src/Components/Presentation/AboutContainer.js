import React, {Component, Fragment} from 'react';
import {Row} from 'reactstrap';

const ip = "http://192.168.1.163";

export default class AboutContainer extends Component {

    constructor(){
        super();
        this.state = {
            data: {}
        }
    }

    componentDidMount(){
        fetch(`${ip}/date`).then(results => {
            return results.json();
        })
            .then(data => {
            // console.log(dates);
            //         debugger;
        this.setState({
            dates: data,

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
