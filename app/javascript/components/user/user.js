import React from "react";
import BtnPrimary from "../buttons/primary";

const UserInfo = () => {
  return (
    <div className="user-info">
      <div className="avatar-holder">
        <img src={require("../../assets/product_02.jpg")} alt="user-avatar" />
      </div>
      <div className="user-meta">
        <p className="small-text-medium">Jacob Peters</p>
        <p className="user-contact">0810 0000 000 | Port Harcourt, Nigeria</p>
        <BtnPrimary title="Send Message" icon="mail_white.svg" />
        <p className="user-last-seen">Last seen online: 20 March 2020</p>
      </div>
    </div>
  );
};

export default UserInfo;
