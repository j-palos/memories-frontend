import React, {Component} from 'react';
import '../App.css';
import ReactRouter from "../Routes/ReactRouter";
import {BrowserRouter as Router} from "react-router-dom";

export default class extends Component {
  render() {
    return (
        <Router><ReactRouter/></Router>
    );
  }
}

