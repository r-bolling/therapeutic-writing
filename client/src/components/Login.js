import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../redux/actions/auth";
import { loginAPI } from "./UserFunctions";
import Landing from "./Landing.js";
import { setUserEmail } from "../redux/actions/journal-actions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      this.props.history.push("/profile");
    }
    console.log(this.props);
    console.log(this.state.auth);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onLogin = (e) => {
    this.props.onLogin(e);
  };

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(this.state.email);

    // v This caused errors v
    // this.props.dispatch(setUserEmail(this.state.email));

    this.onLogin(this.state);
    console.log("login button success!");
    // .then((res) => {
    //   if (res) {
    //     this.props.history.push("/profile");
    //   }
    // });
  }
  render() {
    return (
      <div className="container">
        {console.log(this.state)}
        <Landing />
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  error: state.auth.error,
  // questions: state.entries.questions,
});

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
