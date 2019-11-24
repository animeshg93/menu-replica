import React from "react";

export default function SelectList(props) {
  const items = props.items;
  const listItems = items.map(item => <li>{item}</li>);
  return <ul className="list-group">{listItems}</ul>;
}
