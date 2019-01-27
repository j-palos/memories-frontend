import React, {Component} from "react";
import {Col, Row} from "reactstrap";
import DatesTable from "../DatesTable";

const ip = "http://dateapi.sabrinaherrero.com";

export default class DateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      loaded: false
    };
  }

  componentDidMount() {
    let dates = [];
    fetch(
      `${ip}/date?q={"filters":[{"or":[{"name":"completed","op":"eq","val":false}]}]} `
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        // let numObjects = data.num_results;
        let objects = data.objects;
        debugger;
        for (let i = 0; i < Object.keys(objects).length; i++) {
          // debugger;
          dates.push(objects[i]);
        }
        this.setState({
          dates: dates,
          loaded: true
        });
      });
  }

  handleDeleteClick(e) {
    debugger;

    // alert('are you sure you want to delete');
    fetch(`${ip}/date/${e.target.value}`, {
      method: "delete",
      headers: { "Content-Type": "application/json" }
    }).then(data => {
      console.log(data);
    });
    console.log("Click happened");
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  // }

  render() {
    return (
      <Row>
        <Col sm={2} />
        <Col>
          <h2 className={"text-center "}>Possible Date Ideas</h2>
          {this.state.loaded && (
            <DatesTable
              dates={this.state.dates}
              name={"Dates"}
              handleDeleteClick={e => this.handleDeleteClick(e)}
            />
          )}
        </Col>
        <Col sm={2} />
      </Row>
    );
  }
}
