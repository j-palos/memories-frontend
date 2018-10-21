import React, {Component} from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';

const ip = "http://dateapi.sabrinaherrero.com";

export default class NewDateContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'title': '',
            'description': '',
            'completed': false,
            'date': '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const {validate} = this.state;
        if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success'
        } else {
            validate.emailState = 'has-danger'
        }
        this.setState({validate})
    }

    // handleChange (event) {
    //     debugger;
    //     this.setState( {[event.target.name]: event.target.value} )
    // }

    submitForm(e) {
        e.preventDefault();
        const data = this.state;
        // debugger;
        fetch(`${ip}/date`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then((data) => {
            console.log(data);
        });
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    render() {
        const {title, description, completed, date} = this.state;
        return (
            <Row>
                <Container>
                    <h2 className={'text-center'}>Fill Out With New Data Idea</h2>
                    <Form className="form" onSubmit={(e) => this.submitForm(e)}>
                        <Col>
                            <FormGroup>
                                <Label>Title</Label>
                                <Input
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Enter the Title"
                                    value={title}
                                    onChange={(e) => {
                                        this.handleChange(e);
                                    }}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="Description">Description</Label>
                                <Input
                                    type="text"
                                    name="description"
                                    id="discription"
                                    placeholder="Type a desription here"
                                    value={description}
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="Date">Date</Label>
                                <Input
                                    type="text"
                                    name="date"
                                    id="date"
                                    placeholder="dd-mm-yyyy"
                                    value={date}
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox"
                                           name="completed"
                                           id="completed"
                                           value={completed}
                                           onChange={(e) => this.handleChange(e)}/>{' '}
                                    Completed?
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col>
                            <Button>Submit</Button>
                        </Col>
                    </Form>
                </Container>
            </Row>
        );
    }

}
//
// <Label check for="Complete">
//     <Input
//         type="checkbox"
//         name="completed"
//         id="completed"
//         value={ description }
//         onChange={ (e) => this.handleChange(e) }
//     />{' '}
// </Label>