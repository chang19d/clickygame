import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="titleContainer">
      <h2 className="title">Clicky Game</h2>
      <h5 className="title2 mt-3">Utilizing React.js</h5>
      <h4 className="title2 mt-3">Click on an Image to earn points, but don't click on any more than once!</h4>
    </div>
  );
}

export default Title;
