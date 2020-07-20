import React, { Component } from "react";
import "./EmotionSlider.css";
import sliderPic from "../../images/smileyFaces.png";

//todo add changeEmotion
class EmotionSlider extends Component {
  state = {
    value: 3,
  };

  handleOnChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="emotionSliderDiv">
        <img
          src={sliderPic}
          className="emotionSliderImg"
          alt="Emotion Spectrum"
        />
        <input
          type="range"
          min={1}
          max={5}
          value={this.state.value}
          className="emotionSlider"
          onChange={this.handleOnChange}
        />
        {/* <div className="value">{this.state.value}</div> */}
      </div>
    );
  }
}

export default EmotionSlider;
