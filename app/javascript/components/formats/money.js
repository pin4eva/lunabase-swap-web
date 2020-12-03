import React from "react";

const FormatMoney = ({ money }) => {
  const format = (value) => {
    return new Intl.NumberFormat("ng-NG", {
      maximumFractionDigits: 0,
    }).format(value);
  };

  const fractionToMoney = (value) => {
    return value / 100;
  };

  return <>₦{format(fractionToMoney(money))}</>;
};

export default FormatMoney;
