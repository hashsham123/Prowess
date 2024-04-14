import React from "react";
import "../ComponentsStyle/navbar.css";

function navbar() {
  return (
    <div className="parent">
      <div className="firstChild">
        <div className="logo_holder">
          <img className="logo" src="/Designer.png" alt="Prowess Logo" />
        </div>

        <div className="searchbar_holder">
          <input
            className="searchbar"
            type="search"
            placeholder="Happy Searching!"
          ></input>
          <img className="searchimage" src="/search.png" alt="search--v1" />
        </div>
        {/* <h1 className="">Hello Everyone!</h1> */}

        <div className="register_holder">
          <div className="login_holder">
            <button className="login_button">log in</button>
          </div>
          <div className="signup_holder">
            <button className="signup_button">sign up</button>
          </div>
        </div>

        <div className="text_holder">
          <div className="text1">
            <h4 className="head">Skill Up</h4>
          </div>

          <div className="text2">
            <h4 className="head">Teach on prowess</h4>
          </div>

          <div className="text3">
            <h4 className="head">Categories</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default navbar;
