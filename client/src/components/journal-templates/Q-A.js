import React, { Component } from "react";
import { connect } from "react-redux";
import CompletedQuestion from "../completed-question/CompletedQuestion";
import QuestionForm from "../completed-question/QuestionForm";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { addAnswer } from "../../redux/actions/journal-actions";

class Q_A extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props.questions || [],
      answerBody: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitAnswer = () => {
    this.props.dispatch(addAnswer(this.state));
    this.setState({ answerBody: "" });
  };

  render() {
    // const { entryData, body } = this.props;

    return (
      <div className="Q_A_container">
        <h1>Q-A</h1>
        <QuestionForm />
        {this.props.questions &&
          this.props.questions.map((questions) => {
            return (
              <div>
                <CompletedQuestion
                  entryData={questions}
                  removeEntry={this.removeEntry}
                />
              </div>
            );
          })}
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    questions: store.entries.questions,
  };
}

export default connect(mapStateToProps)(Q_A);
