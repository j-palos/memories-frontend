import React, {Component} from "react";
import {Col, Row} from "reactstrap";

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
    this.setState({ selectedFile: event.target.files[0] });
  };

  uploadHandler = () => {
    let file = this.state.selectedFile;
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      let data = reader.result.toString();
      let splitd = data.split("data:", 2);
      let type = splitd[1].split(";", 2)[0];
      let result = reader.result.split(",", 2)[1];
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
