import React from "react";
import Profile from "../assets/Rectangle 79.png";
import 'Side'

function SideBar() {
  return (
    <div className="container">
    <div className="leftSide">
      <img src={Profile} alt="Profile photo" className="profilePhoto" />
      <h2 className="names">Hosen.R</h2>
      <p>Kigali, Rwanda</p>
    </div>
    </div>
  );
}

export default SideBar;
