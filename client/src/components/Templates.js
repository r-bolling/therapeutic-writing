import React, { Component } from "react";
import { connect } from "react-redux";
import Day from "../components/date/Date";
import PhotoJournal from "../components/journal-templates/Photo";
import Form from "../components/journal-form/JournalForm";
// import OpenJournal from "../components/journal-templates/Open";
import Q_AJournal from "../components/journal-templates/Q-A";
import EmotionSlider from "../components/emotion-slider/EmotionSlider";
import TempLinks from "../components/journal-templates/TempLinks";

class TemplateContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null,
      template: {
        photo: PhotoJournal,
        qa: Q_AJournal,
        open: Form,
      },
    };
  }

  render() {
    console.log("running");
    // console.log(this.state.template["photo"]);

    const ComponentToRender = this.state.template[this.props.templateID];

    if (ComponentToRender) {
      return (
        <div className="template">
          <Day />
          <a href="http://localhost:3000/journal"> Back </a>
          <br />
          <EmotionSlider />
          <br />
          <TempLinks />
          <ComponentToRender userEmail={this.props.userEmail} />
        </div>
      );
      return <div>no component</div>;
    }
  }
}

function mapStateToProps(store) {
  return {
    templateID: store.entries.templateID,
    userEmail: store.entries.userEmail,
    // count: store.count,
  };
}

export default connect(mapStateToProps)(TemplateContainer);
