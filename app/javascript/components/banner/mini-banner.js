import React from "react";
import BtnFancy from "../buttons/fancy";

const MiniBanner = () => {
  const style = {
    fontFamily: "SF Pro Display",
    fontSize: 40,
    fontWeight: 500,
    color: "#EE7329",
    marginBottom: 15,
  };

  return (
    <div className="mini-banner">
      <div>
        <p>Got an item you to swap?</p>
        <p style={style}>Awesome!</p>
        <BtnFancy a="Post it" b="It’s FREE" />
      </div>
    </div>
  );
};

export default MiniBanner;
