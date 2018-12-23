import React from "react";
import "./style.css";


function Scoreboard(props) {
  return <h3 className="scoreBoard">{props.children}</h3>;
}

export default Scoreboard;