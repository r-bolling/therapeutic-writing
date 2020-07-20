import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../redux/actions/users";
import UserInfo from "./user-info/UserInfo.js";
import jwt_decode from "jwt-decode";
import Day from "./date/Date.js";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
    };
  }

  onGetUser = () => {
    this.props.onGetUser();
  };

  componentDidMount() {
    this.onGetUser();
    // this.timer = setInterval(() => {
    //   this.setState({
    //     first_name: this.props.first_name,
    //     last_name: this.props.last_name,
    //   });
    // });
    setTimeout(() => {
      this.setState({
        first_name: this.props.first_name,
        last_name: this.props.last_name,
        // email: user.email,
      });
    }, 300);
    // this.setState({
    //   first_name: this.props.first_name,
    //   last_name: this.props.last_name,
    //   // email: user.email,
    // });

    // setTimeout(
    //   {
    //     function() {
    //       const token = localStorage.usertoken;
    //       const decoded = jwt_decode(token);
    //       this.setState({
    //         first_name: decoded.first_name,
    //         last_name: decoded.last_name,
    //         email: decoded.email,
    //       });
    //     },
    //   },
    //   1000
    // );
    // const token = localStorage.usertoken;
    // console.log(this.props);
    // const decoded = jwt_decode(token);
    // this.setState({
    //   first_name: decoded.first_name,
    //   last_name: decoded.last_name,
    //   email: decoded.email,
    // });
  }

  render() {
    return (
      <div className="container">
        <Day />
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <UserInfo
            firstName={this.state.first_name}
            lastName={this.state.last_name}
          />
          {/* <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>First Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  first_name: state.users.first_name,
  last_name: state.users.last_name,
  favorite_quote: state.auth.favorite_quote,
  loading: state.auth.loading,
  error: state.auth.error,
});

const mapDispatchToProps = {
  onGetUser: getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

// export default Profile;
