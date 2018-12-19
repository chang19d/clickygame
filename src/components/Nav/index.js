import React from "react";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      
      
      <h5><a href="/" className="navbar-brand text-white">Clicky Game</a></h5>
      <h1 className="answer mx-auto text-white">Score: {props.score}</h1>
      <h5 className="score mr-0 text-white">Hiscore: {props.hiscore}</h5>
      
    </nav>
  );
}

export default Nav;
