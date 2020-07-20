import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { addQuestion } from "../../redux/actions/journal-actions";

class QuestionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };
  submitQuestion = () => {
    const newQuestion = this.state;
    const body = {
      entryType: "qa",
      entry: newQuestion,
    };
    addQuestion(body, this.props.dispatch);

    // this.props.dispatch(submitFormAction(this.state));
    this.setState({ body: "" });
  };

  render() {
    const { title, body } = this.state;

    return (
      <div>
        <form>
          <FormGroup>
            <Label>Title</Label>
            <Input
              placeholder="Enter title"
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>
              Give yourself a question or subject to respond to, or select one
              from a list of suggestions.
            </Label>
            <Input
              placeholder="How are you feeling today?"
              type="textarea"
              name="body"
              id="body"
              value={body}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button color="danger" onClick={this.submitQuestion} size="lg" block>
            Add Question
          </Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    questions: store.entries.questions,
  };
}

export default connect(mapStateToProps)(QuestionForm);
