import React from "react";
import ReactDOM from "react-dom";
import Search from "../pages/search/search";

document.addEventListener("turbolinks:load", () => {
  var search = document.querySelector(".search-page");

  if (search) ReactDOM.render(<Search />, search);
});
