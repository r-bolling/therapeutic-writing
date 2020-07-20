import React, { Component } from "react";
import EmotionSlider from "./emotion-slider/EmotionSlider.js";
import Login from "./Login.js";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h2 className="text-center"> WELCOME</h2>
          </div>
        </div>
        {/* <Login /> */}
        {/* <EmotionSlider /> */}
      </div>
    );
  }
}

export default Landing;
