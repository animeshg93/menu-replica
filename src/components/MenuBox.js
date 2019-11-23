import React from "react";
import "../css/MenuBox.css";

export default function MenuBox(props) {
  return (
    <div className={props.column}>
      <h5>{props.name}</h5>
    </div>
  );
}
