import React from "react";

const Header = ({ text, type }) => {
  const large = {
    fontSize: 35,
    fontFamily: "SF Pro Display",
    marginBottom: 35,
    fontWeight: 500,
  };

  const medium = {
    fontSize: 30,
    fontFamily: "SF Pro Display",
    marginBottom: 35,
  };

  const small = {
    fontSize: 20,
    fontFamily: "SF Pro Display",
    marginBottom: 30,
    fontWeight: 700,
  };

  const sub = {
    fontSize: 25,
    fontFamily: "SF Pro Display",
    marginBottom: 30,
    fontWeight: 400,
    color: "#848484",
  };

  return (
    <p
      style={type == "LARGE"
        ? large
        : type == "MEDIUM"
        ? medium
        : type == "SMALL"
        ? small
        : sub}
    >
      {text}
    </p>
  );
};

export default Header;
