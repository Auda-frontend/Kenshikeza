import React from "react";
import Profile from "../assets/Rectangle 79.png";
import './SideBar.css';
import HomeIcon from "../assets/ep_menu.png";

function SideBar() {
  return (
    <div className="container">
    <div className="leftSide">
        div.profile
      <img src={Profile} alt="Profile photo" className="profilePhoto" />
      <div className="desc">
      <h2 className="names">Hosen.R</h2>
      <p>Kigali, Rwanda</p>
      </div>
      <div className="homepage">
        <img src={HomeIcon} alt="Menu icon" className="homeIcon" />
      </div>
    </div>
    </div>
  );
}

export default SideBar;
