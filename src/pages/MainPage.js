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
        <MenuBox
          name="container"
          column="col-sm-3"
          items={["bowl", "burrito"]}
        />
        <MenuBox name="delivery" column="col-sm-3" items={["here", "to-go"]} />
        <MenuBox name="beans" column="col-sm-3" items={["pinto", "black"]} />
        <MenuBox name="rice" column="col-sm-3" items={["brown", "white"]} />
        <MenuBox
          name="meat"
          column="col-sm-3"
          items={["chicken", "sofritas", "beef"]}
        />
        <MenuBox
          name="salsa"
          column="col-sm-3"
          items={["mild", "medium", "hot"]}
        />
        <MenuBox
          name="misc"
          column="col-sm-10"
          items={["corn", "sour-cream", "cheese", "guac", "lettuce"]}
        />
      </div>
    </div>
  );
}
