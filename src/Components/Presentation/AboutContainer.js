import React, {Component} from "react";
import {Col, Row} from "reactstrap";

const ip = "http://dateapi.sabrinaherrero.com";

export default class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      loaded: 0,
      formStuff: {}
    };
  }

  fileChangedHandler = event => {
    // debugger;
    this.setState({ selectedFile: event.target.files[0] });
  };

  // getBase64 = (file) => {
  //     console.log('here');
  //     let reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = function () {
  //         console.log(reader.result);
  //     };
  //     reader.onerror = function (error) {
  //         console.log('Error: ', error);
  //     };
  // };

  uploadHandler = () => {
    // console.log(this.state.selectedFile);
    // debugger;
    let file = this.state.selectedFile;
    // debugger;
    // console.log(Object.keys(files).length);
    // if (Object.keys(files).length > 0) {
    //     console.log('heere');
    let reader = new FileReader();
    reader.readAsDataURL(file);
    // debugger;
    reader.onload = function() {
      console.log(reader.result);
    };
    reader.onerror = function(error) {
      console.log("Error: ", error);
    };
    // }
    fetch(`${ip}/image`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        image: reader.result,
        date_id: 10,
        description: "test picture"
      })
    }).then(data => {
      console.log(data);
    });

    // debugger;
  };

  render() {
    return (
      <div>
        <Row>
          <Col>
            Gonna put testing code here for now
            <input type="file" onChange={this.fileChangedHandler} />
            <button onClick={this.uploadHandler}>Upload!</button>
          </Col>
        </Row>
        <Row>
          <p>{/*{this.state.dates}*/}</p>
        </Row>
      </div>
    );
  }
}
