import React from "react";
import "../../ComponentsStyle/lectures.css";
import lectureData from "./lectureData.js";

function Lectures() {
  return (
    <div className="parentLecture">
      <div className="firstChildLecture">
        {lectureData.map((lecture) => (
          <div className="lectureHolder" key={lecture.id}>
            <div className="imgHolder">
              <img src={lecture.image} alt="image" className="imgLecture" />
            </div>
            <div className="textHolder">
              <div className="descText">
                <p className="plainText">{lecture.plainText}</p>
              </div>
              <div className="AuthorName">
                <p className="plainTextAuthor">{lecture.authorName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lectures;
