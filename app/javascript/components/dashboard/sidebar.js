import React from "react";
import PropTypes from "prop-types";
import { sidebarItems } from "../../shared-data/dashboard";
import Item from "../../components/lists/nav-list";

const DashboardSidebar = ({ onClick }) => {
  return (
    <>
      <div className="dashboard-sidebar">
        <aside>
          <div className="inner">
            <div className="profile-area">
              <div className="image-wrapper">
                <img src={require("../../assets/user_profile@2x.png")} alt="" />
              </div>
              <p className="text-dark">Jacob Peters</p>
              <div className="contact">
                <p>0810000000000</p> | <p>Port Harcourt, Nigeria</p>
              </div>
            </div>
            <div className="divider" />
            <div className="menu-list">
              <div className="inner">
                <div className="sidebar">
                  <Item List={sidebarItems} onClick={onClick} />
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

DashboardSidebar.propTypes = {
  onClick: PropTypes.func,
};

export default DashboardSidebar;
