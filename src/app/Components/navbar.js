import React from "react";
import "../ComponentsStyle/navbar.css";
// import Image from "../Images";
function navbar() {
  return (
    <div className="parent">
      <div className="firstChild">
        <div className="logo_holder">
          <img className="logo" src="/Designer.png" alt="Prowess Logo" />
        </div>
        <div className="searchbar_holder"> 
          <input className="searchbar" type="search" placeholder="Happy Searching!"></input>
        </div>
        {/* <h1 className="">Hello Everyone!</h1> */}
      </div>
    </div>
  );
}

export default navbar;
