import React from "react";
import ReactDOM from "react-dom";
import Account from "../pages/account/account";
import "../style/product.scss";

document.addEventListener("turbolinks:load", () => {
  var account = document.querySelector(".account-page");

  if (account) ReactDOM.render(<Account />, account);
});
