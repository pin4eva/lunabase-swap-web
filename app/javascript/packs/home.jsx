import React from "react";
import ReactDOM from "react-dom";
import Home from "../pages/home/home";
import "../style/app.scss";

document.addEventListener("turbolinks:load", () => {
  var home = document.querySelector(".homepage");

  if (home) ReactDOM.render(<Home />, home);
});
