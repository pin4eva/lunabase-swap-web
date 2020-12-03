import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import ArrowComp from "./arrow";

const SelectComp = ({ children }) => {
  const [show, setShow] = useState(false);
  const wrapperRef = useRef();
  console.log(wrapperRef);
  return (
    <div className="custom-select" onClick={() => setShow(!show)}>
      <div className="d-flex">
        <span className="item-desc" style={{ color: show && "#ee7329" }}>
          All Listing
        </span>
        <ArrowComp rotate={show} />
      </div>
      {show && (
        <div className={`menu-items ${show ? "show" : "hide"}`}>
          <ul>
            <li>Swap</li>
            <li>Bid/Offer</li>
          </ul>
        </div>
      )}
    </div>
  );
};

SelectComp.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default SelectComp;
