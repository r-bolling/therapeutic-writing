import React, { Component } from "react";
import Form from "../journal-form/JournalForm.js";

class Open extends Component {
  state = {
    entries: [],
  };

  render() {
    const { entries } = this.state;
    return (
      <div className="open_container">
        <Form />
      </div>
    );
  }
}

export default Open;

// add redux
// - actions:  saveEntry (get request to backend which will send back all entries)
