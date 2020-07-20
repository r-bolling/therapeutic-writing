import React, { Component } from "react";
import { setTemplateAction } from "../../redux/actions/journal-actions";
import { connect } from "react-redux";

class TempLinks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoStyle: "yellow",
      qaStyle: "yellow",
      openStyle: "yellow",
    };
    // add journal type to props
  }

  render() {
    return (
      <div className="filters">
        <button
          to="/templates"
          id="open"
          style={{ backgroundColor: this.state.openStyle }}
          onClick={() => {
            console.log("running");
            // let action = setTemplateAction("open");
            this.props.dispatch(setTemplateAction("open"));
            this.setState({
              photoStyle: "yellow",
              qaStyle: "yellow",
              openStyle: "red",
            });
          }}
        >
          Open
        </button>
        <button
          to="/photo"
          style={{ backgroundColor: this.state.photoStyle }}
          id="photo"
          onClick={() => {
            // let action = setTemplateAction("photo");
            this.props.dispatch(setTemplateAction("photo"));
            // console.log("action: ", action);
            this.setState({
              photoStyle: "red",
              qaStyle: "yellow",
              openStyle: "yellow",
            });
          }}
        >
          Photo
        </button>
        <button
          to="/qa"
          id="qa"
          style={{ backgroundColor: this.state.qaStyle }}
          onClick={() => {
            // let action = setTemplateAction("qa");
            this.props.dispatch(setTemplateAction("qa"));
            this.setState({
              photoStyle: "yellow",
              qaStyle: "red",
              openStyle: "yellow",
            });
          }}
        >
          Q+A
        </button>
      </div>
    );
  }
}

function mapStateToProps(store) {}

export default connect(mapStateToProps)(TempLinks);
