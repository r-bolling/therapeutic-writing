import React, { Component } from "react";
import { Link } from "react-router-dom";
import pussinboots from "../images/pussinboots.jpg";
import "./PageNotFound.css"

class PageNotFound extends Component {
  render() {
    return (
      <>
        <img src={pussinboots} className="pussInBootsImg" alt="Picture of cute cat" />
        <h2>I'm sorry this page doesn't exist!</h2>
        <Link to="/">Go Home</Link>
      </>
    );
  }
}

export default PageNotFound;