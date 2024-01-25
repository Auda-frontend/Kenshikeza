import React from "react";
import Profile from "../assets/Rectangle 79.png";
import './SideBar.css';

function SideBar() {
  return (
    <div className="container">
    <div className="leftSide">
      <img src={Profile} alt="Profile photo" className="profilePhoto" />
      <div className="desc">
      <h2 className="names">Hosen.R</h2>
      <p>Kigali, Rwanda</p>
      </div>
      div
    </div>
    </div>
  );
}

export default SideBar;
