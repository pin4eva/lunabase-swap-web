import React from "react";
import ReactDOM from "react-dom";
import Nav from "../components/nav/nav";
import "../style/nav.scss";

document.addEventListener("turbolinks:load", () => {
  var nav = document.querySelector(".nav");

  if (nav) ReactDOM.render(<Nav />, nav);
});
