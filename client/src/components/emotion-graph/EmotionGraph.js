import React, { Component } from "react";
import "./EmotionGraph.css";
import graphPic from "../../images/smileyFacesGraph.png";

//todo add changeEmotion
class EmotionSlider extends Component {
  state = {
    emotions: [
      2,
      2,
      3,
      0,
      1,
      1,
      2,
      4,
      3,
      3,
      2,
      2,
      1,
      2,
      2,
      0,
      0,
      1,
      2,
      2,
      1,
      2,
      4,
      4,
      4,
      3,
      3,
      3,
      2,
      0,
    ],
    heightMultiplier: 100,
  };
  //128px

  //   handleOnChange = (event) => {
  //     this.setState({ value: event.target.value });
  //   };

  testGraph = (event) => {};
  componentDidMount() {
    this.populateGraph(this.state.emotions);
  }

  populateGraph = (emotions) => {
    let graphBar = document.createElement("div");
    const graph = document.getElementById("emotionGraph");
    for (let i = 0; i < emotions.length; i++) {
      graphBar = document.createElement("div");
      if (emotions[i] === 0) {
        graphBar.style.backgroundColor = "orange";
        graphBar.style.height = "100px";
      } else if (emotions[i] === 1) {
        graphBar.style.backgroundColor = "green";
        graphBar.style.height = "200px";
      } else if (emotions[i] === 2) {
        graphBar.style.backgroundColor = "gray";
        graphBar.style.height = "300px";
      } else if (emotions[i] === 3) {
        graphBar.style.backgroundColor = "blue";
        graphBar.style.height = "400px";
      } else if (emotions[i] === 4) {
        graphBar.style.backgroundColor = "red";
        graphBar.style.height = "500px";
      }
      graphBar.style.width = "20px";
      graphBar.style.margin = "0px";
      graph.appendChild(graphBar);
    }
  };

  render() {
    return (
      <div className="emotionGraphDiv">
        <img
          src={graphPic}
          className="emotionGraphImg"
          alt="Emotion Spectrum"
        />
        <div id="emotionGraph"></div>
        {/* <div className="value">{this.state.value}</div> */}
      </div>
    );
  }
}

export default EmotionSlider;
