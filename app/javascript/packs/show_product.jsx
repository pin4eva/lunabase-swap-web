import React from "react";
import ReactDOM from "react-dom";
import Show from "../pages/product/show";
import "../style/product.scss";

document.addEventListener("turbolinks:load", () => {
  var show = document.querySelector(".show-product-page");

  if (show) ReactDOM.render(<Show />, show);
});
