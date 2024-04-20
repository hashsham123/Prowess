"use client";
import React, { useState } from "react";
import Login from "../Components/login";
import "./page.css";
import Link from "next/link";

function login() {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="parentLogin">
      <div className="childLogin">
        <div className="registerBox">
          <div className="headerLogin">
            <div>
              <Link href="/">
                <img
                  className="logoImgRegister"
                  src="/Designer.png"
                  alt="logo"
                />
              </Link>
            </div>
          </div>
          <div className="tabsRegister">
            <div
              className={`tabLogin ${activeTab === "login" ? "active" : ""}`}
              onClick={() => handleTabClick("login")}
            >
              Sign In
            </div>
            <div
              className={`tabSignup ${activeTab === "signup" ? "active" : ""}`}
              onClick={() => handleTabClick("signup")}
            >
              Sign Up
            </div>
          </div>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default login;
