import React from "react";

function Day() {
  let todayObj = new Date();
  todayObj = todayObj.toString().split(" ");
  let today = todayObj.slice(0, 4);
  today = today.join(" ");

  return (
    <div className="date">
      <p>{today}</p>
    </div>
  );
}

export default Day;
