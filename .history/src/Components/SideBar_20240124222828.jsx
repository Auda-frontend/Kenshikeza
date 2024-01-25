import React from "react";
import Profile from "../assets/Rectangle 79.png";

function SideBar() {
  return (
    <div className="leftSide">
      <img src={Profile} alt="Profile photo" className="profilePhot" />
    </div>
  );
}

export default SideBar;
