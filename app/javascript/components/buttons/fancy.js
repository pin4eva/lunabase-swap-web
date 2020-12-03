import React, { useState } from "react";
import { motion } from "framer-motion";

const BtnFancy = ({ a, b }) => {
  const [isHover, setHover] = useState(false);
  // let isHover = false;

  const pillVariant = {
    init: {
      right: "auto",
      left: 0,
      background: "#EE7329",
    },
    hover: {
      right: 0,
      left: "auto",
      background: "#222222",
    },
  };

  const textVariant = {
    init: {
      color: "#fff",
    },
    hover: {
      color: "#222222",
    },
  };

  const handleHover = (e) => {
    e == "onHover" ? setHover(true) : setHover(false);
    // console.log(e, isHover);
  };

  return (
    <motion.span
      className="btn fancy"
      onHoverStart={(e) => {
        handleHover("onHover");
      }}
      onHoverEnd={(e) => {
        handleHover("onHoverEnd");
      }}
      whileHover={{ border: "2px solid #EE7329" }}
    >
      <motion.span
        variants={textVariant}
        animate={isHover ? "init" : "hover"}
        className="first"
      >
        {a}
      </motion.span>
      <motion.span
        variants={textVariant}
        animate={isHover ? "hover" : "init"}
        className="first"
        className="second"
      >
        {b}
      </motion.span>
      <motion.span
        variants={pillVariant}
        animate={isHover ? "init" : "hover"}
        className="pill"
      ></motion.span>
    </motion.span>
  );
};

export default BtnFancy;
