import React, { useState } from "react";
import "../css/MenuBox.css";
import SelectList from "./SelectList";

export default function MenuBox(props) {
  const [show, setShow] = useState(false);

  if (!show) {
    return (
      <div className={props.column} onClick={() => setShow(true)}>
        <h5>{props.name}</h5>
      </div>
    );
  } else {
    return (
      <button onClick={() => setShow(false)}>
        <div className={props.column}>
          <SelectList items={props.items} />
        </div>
      </button>
    );
  }
}
