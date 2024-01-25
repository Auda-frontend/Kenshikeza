import React from "react";
import Profile from "../assets/Rectangle 79.png";
import './SideBar.css';
import HomeIcon from "../assets/ep_menu.png";
import MutualTourists from "../assets/cil_group.png";

function SideBar() {
  return (
    <div className="container">
    <div className="leftSide">
<div className="profile"> 
      <img src={Profile} alt="Profile photo" className="profilePhoto" />
      <div className="desc">
      <h2 className="names">Hosen.R</h2>
      <p>Kigali, Rwanda</p>
      </div>
      </div>
      <div className="homepage">
        <img src={HomeIcon} alt="Menu icon" className="homeIcon" />
        <h2>Homepage</h2>
      </div>
      <div className="mutual">
        <img src={MutualTourists} alt="Menu icon" className="groupIcon" />
        <h2>Mutual Tourists</h2>
      </div>
      
    </div>
    </div>
  );
}

export default SideBar;