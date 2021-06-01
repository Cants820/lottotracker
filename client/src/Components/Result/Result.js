import React from "react";
import "./Result.css";

function Result(props) {
  return (
    <ol>
      {props.draw.map((number, i) => <li key={i}><ins>{number}</ins></li>)}
    </ol>
  );
}

export default Result;
