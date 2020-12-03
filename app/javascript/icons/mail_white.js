import React from "react";

const MailBox = (props) => {
  return (
    <svg width={25} height={25} viewBox="0 0 25 25" {...props}>
      <defs>
        <clipPath id="prefix__a">
          <path
            data-name="Rectangle 511"
            transform="translate(205 622)"
            fill="#fff"
            stroke="#707070"
            d="M0 0h25v25H0z"
          />
        </clipPath>
      </defs>
      <g
        data-name="Mask Group 66"
        transform="translate(-205 -622)"
        clipPath="url(#prefix__a)"
      >
        <g data-name="email (3)" fill="#fff">
          <path
            data-name="Path 976"
            d="M216.275 634.371a2.464 2.464 0 002.451 0l11.126-7.418a2.7 2.7 0 00-2.546-1.815h-19.612a2.7 2.7 0 00-2.546 1.815l11.127 7.418z"
          />
          <path
            data-name="Path 977"
            d="M219.538 635.591a3.92 3.92 0 01-4.076 0L205 628.616v12.549a2.7 2.7 0 002.694 2.7h19.612a2.7 2.7 0 002.694-2.7v-12.549z"
          />
        </g>
      </g>
    </svg>
  );
};

export default MailBox;
