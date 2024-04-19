import React from "react";
import VideoScreen from "../Components/videoScreen";
import Navbar from "../Components/navbar";
import Lectures from "../Components/lectures.js";
import "./page.css"
function videos() {
  return (
    <>
      <Navbar />
      <div className="pageHolder">
        <VideoScreen />
        <Lectures />
      </div>
    </>
  );
}

export default videos;
