import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/actions/auth";

class Navbar extends Component {
  onLogout = () => {
    this.props.onLogout();
    localStorage.removeItem("usertoken");
    this.props.history.push("/");
  };

  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }

  componentDidUpdate() {
    // if (this.props.isAuthenticated === false) {
    //   this.props.history.push("/");
    // }
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    );

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/journal" className="nav-link">
            Journal
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/data" className="nav-link">
            Data
          </Link>
        </li>
        <li className="nav-item">
          {/* <a href="" onClick={this.logOut.bind(this)} className="nav-link"> */}
          <a href="" onClick={this.onLogout} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar1"
          aria-controls="navbar1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbar1"
        >
          {/* <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul> */}
          {this.props.isAuthenticated ? userLink : loginRegLink}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  onLogout: logout,
};

const routerNavbar = withRouter(Navbar);

export default connect(mapStateToProps, mapDispatchToProps)(routerNavbar);

// export default withRouter(Navbar);
