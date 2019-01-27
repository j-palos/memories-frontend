import React, {Component} from "react";
import {Col, Row} from "reactstrap";

// const ip = "http://dateapi.sabrinaherrero.com";
// const ip = "http://dateapi.sabrinaherrero.com";
const ip = "http://192.168.1.68";
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
    var reader = new FileReader();
    reader.readAsDataURL(file);
    // debugger;
    reader.onload = function() {
      // g = reader.result.toString();
      // debugger;
      // console.log(g);
      // console.log(reader.result);
      let data = reader.result.toString();
      // let result = type;
      // console.log(data);
      // debugger;
      let splitd = data.split("data:", 2);
      // debugger;
      let type = splitd[1].split(";", 2)[0];
      // debugger;
      let result = reader.result.split(",", 2)[1];
      // debugger;
      fetch(`${ip}/image`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image: result,
          type: type,
          date_id: 10,
          description: "test picture"
        })
      }).then(data => {
        console.log(data);
      });
    };
    reader.onerror = function(error) {
      console.log("Error: ", error);
    };
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
