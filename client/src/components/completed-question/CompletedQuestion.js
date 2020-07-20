import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { addAnswer } from "../../redux/actions/journal-actions";
import { getQuestions } from "../../redux/actions/journal-actions";
class CompletedQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
    };
  }

  componentDidMount() {
    console.log("running");
    // getQuestions("m@j.com", this.props.dispatch);
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };
  submitAnswer = () => {
    this.props.dispatch(addAnswer(this.state));
    this.setState({ title: "", body: "" });
  };

  render() {
    const { answerBody } = this.state;
    console.log("answerBody: ", answerBody);
    return (
      <div>
        {/* {this.props.entryData &&
              this.props.entryData.map((entry) => {
                return (
                  <CompletedEntry
                    entryData={entryData.body}
                    removeEntry={this.removeEntry}
                  />
                );
              })} */}
        {/* <p>{entryData.body}</p> */}
        <button onClick={() => console.log(this.state)}>log</button>
        <form>
          <FormGroup>
            <Label>Answer</Label>
            <Input
              placeholder="Answer"
              type="textarea"
              name="body"
              id="body"
              value={answerBody}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button color="danger" onClick={this.submitQuestion} size="lg" block>
            Add
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
export default connect(mapStateToProps)(CompletedQuestion);
