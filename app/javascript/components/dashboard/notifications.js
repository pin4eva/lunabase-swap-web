import React from "react";
import PropTypes from "prop-types";
import bell from "../../assets/notification_icon.svg";

const NotificationsComp = (props) => {
  return (
    <div className="notification_wrapper">
      <h3 className="top-heading">Notification</h3>
      <div className="c-container">
        <div className="inner">
          <div className="container_flex">
            <div className="left">
              <img src={bell} alt="" />
            </div>
            <div className="right">
              <h6>Apple Macbook Pro 15' Retina 512GB SSD</h6>
              <div className="message_arrea">
                Username has show interest on a product you posted and has bid
                N300,000 for the product
              </div>
              <div className="d-flex button-group">
                <button className="btn btn-primary ">Accept</button>
                <button className="btn btn-gray ">Decline</button>
              </div>
            </div>
          </div>
          <div className="container_flex">
            <div className="left">
              <img src={bell} alt="" />
            </div>
            <div className="right">
              <h6>Welcome Message</h6>
              <div className="message_arrea">
                Donec sed odio dui. Vestibulum id ligula porta felis euismod
                semper. Etiam porta sem malesuada magna mollis euismod. Integer
                posuere erat a ante venenatis dapibus posuere velit aliquet.
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NotificationsComp.propTypes = {};

export default NotificationsComp;
