import React, { Component } from "react";
import "./UserInfo.css";
import userAvatar from "../../images/userimgplcholder.png";

class UserInfo extends Component {
  state = {
    listOfGoals: ["Go outside!", "Take a deep breath!", "Go back inside!"],
  };

  // date = () => {
  //   const currentDate = "January 1, 2020";
  //   return currentDate;
  // };

  username = () => {
    const firstName =
      this.props.firstName.charAt(0).toUpperCase() +
      this.props.firstName.slice(1);
    const lastName =
      this.props.lastName.charAt(0).toUpperCase() +
      this.props.lastName.slice(1);
    const fullName = firstName + " " + lastName;
    return fullName;
  };

  favQuote = () => {
    const favoriteQuote = "Favorite quote or affirmation";
    return favoriteQuote;
  };

  goalsList = () => {
    let goals = [];
    for (let i = 0; i < this.state.listOfGoals.length; i++) {
      goals.push(this.state.listOfGoals[i]);
      goals.push(<br key={i} />);
    }

    console.log(goals);
    return goals;
  };

  render() {
    return (
      <div className="Container">
        <div className="todayDate">{/* <h2>{this.date()}</h2> */}</div>
        <div className="profileInfo">
          <img className="avatar" alt="User Avatar" src={userAvatar} />
          <b className="userName">{this.username()}</b>
          <i className="quote">{this.favQuote()}</i>
          <div className="goals">
            <b>Goals</b>
            <p>{this.goalsList()}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfo;
