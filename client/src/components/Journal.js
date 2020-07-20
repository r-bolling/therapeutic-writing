import React, { Component } from "react";
import { Link } from "react-router-dom";
import Day from "./date/Date.js";
import { connect } from "react-redux";
import CompletedEntry from "../components/completed-entry/CompletedEntry";
import { getOpenEntries } from "../components/UserFunctions";

class Journal extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   entries: this.props.entryData || [],
    // };
  }

  componentDidMount() {
    console.log("running");
    if (this.props.userEmail) {
      getOpenEntries(this.props.userEmail, this.props.dispatch);
    }
  }

  render() {
    return (
      <div className="journalContainer">
        <Day />
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h2 className="text-center"> Journal</h2>
          </div>
          <div>
            {this.props.entryData &&
              this.props.entryData.map((entry) => {
                return (
                  <CompletedEntry
                    entryData={entry}
                    removeEntry={this.removeEntry}
                  />
                );
              })}
          </div>
          <Link to="/templates">Templates</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    entryData: store.entries.entries,
    userEmail: store.entries.userEmail,
  };
}

export default connect(mapStateToProps)(Journal);
