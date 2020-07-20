import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { submitFormAction } from "../../redux/actions/journal-actions";
import { addOpenEntry } from "../../components/UserFunctions";
// import { handleSubmitAction } from "../../redux/actions/journal-A";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      // email: this.props.userEmail,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    console.log("****");
    console.log(this.props.userEmail);
    // console.log(this.props);
    console.log("****");
    const newOpenEntry = this.state;
    newOpenEntry.email = this.props.userEmail;
    const body = {
      entryType: "open",
      entry: newOpenEntry,
      email: this.props.userEmail,
    };
    console.log("BODY: ", body);
    addOpenEntry(body, this.props.dispatch);

    // this.props.dispatch(submitFormAction(this.state));
    this.setState({ title: "", body: "" });
  };
  render() {
    const { title, body } = this.state;

    return (
      <div>
        <button onClick={() => console.log(this.state)}>log</button>
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
            <Label>Entry</Label>
            <Input
              placeholder="What's up?"
              type="textarea"
              name="body"
              id="body"
              value={body}
              onChange={this.handleChange}
            />
          </FormGroup>
        </form>

        <Button color="danger" onClick={this.submitForm} size="lg" block>
          Submit
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userEmail: state.entries.userEmail,
  };
}

export default connect(mapStateToProps)(Form);
