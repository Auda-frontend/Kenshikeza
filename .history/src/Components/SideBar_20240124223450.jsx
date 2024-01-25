import React from "react";
import Profile from "../assets/Rectangle 79.png";

function SideBar() {
  return (
    <div className="container">
    <div className="leftSide">
      <img src={Profile} alt="Profile photo" className="profilePhoto" />
      
    </div>
    </div>
  );
}

export default SideBar;
