import React from "react";
import "../ComponentsStyle/login.css";
function login() {
  return (
    <div className="inputHolderLogin">
      <div className="emailInputLoginHold">
        <input className="emailInputLogin" type="email"></input>
      </div>
      <div className="passwordInputLoginHold">
        <input className="passwordInputLogin" type="password"></input>
      </div>
      <div className="buttonLogin"></div>
    </div>
  );
}

export default login;
