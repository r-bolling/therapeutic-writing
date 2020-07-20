import React, { Component } from "react";
import EmotionGraph from "./emotion-graph/EmotionGraph.js";
import Login from "./Login.js";

class Data extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h2 className="text-center">Data</h2>
          </div>
        </div>
        <div id="data">
          <p>Hello!</p>
          <EmotionGraph />
        </div>
        {/* <Login /> */}
        {/* <EmotionSlider /> */}
      </div>
    );
  }
}

export default Data;
