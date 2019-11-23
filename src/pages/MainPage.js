import React from "react";
import MenuBox from "../components/MenuBox";
import "../css/MainPage.css";

export default function MainPage() {
  return (
    <div className="container">
      <div className="header">
        <h2>Welcome to Chipotle Replica!!</h2>
      </div>
      <div className="row">
        <MenuBox name="container" column="col-sm-3" />
        <MenuBox name="delivery" column="col-sm-3" />
        <MenuBox name="beans" column="col-sm-3" />
        <MenuBox name="rice" column="col-sm-3" />
        <MenuBox name="meat" column="col-sm-3" />
        <MenuBox name="salsa" column="col-sm-3" />
        <MenuBox name="misc" column="col-sm-10" />
      </div>
    </div>
  );
}
