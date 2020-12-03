import React from "react";
import Item from "../../components/lists/nav-list";
import { CatList } from "../../shared-data/lists";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Item List={CatList} />
    </div>
  );
};

export default Sidebar;
