import React, { Component } from "react";
import Form from "../journal-form/JournalForm";
import PhotoUpload from "./PhotoUpload";

class Photo extends Component {
  state = {};
  // pass down highlight button as props

  render() {
    return (
      <div className="photo_container">
        <PhotoUpload />
        <br />
        <Form />
      </div>
    );
  }
}

export default Photo;
