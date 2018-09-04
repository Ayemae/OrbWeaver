import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import ComicStage from './ComicStage';
import CenterContent from './CenterContent';


class Index extends Component {
  render() {
    return (
      <div className="index-container">
        <Header />

        <ComicStage />

        <CenterContent />
        <div className="left-content">??</div>
        <div className="right-content">!!</div>

        <footer>A test by Alyssa Alecci</footer>
      </div>
    );
  }
}

export default Index;
