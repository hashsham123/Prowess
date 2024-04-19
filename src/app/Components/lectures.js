import React from "react";
import "../ComponentsStyle/lectures.css";
function lectures() {
  return (
    <div className="parentLecture">
      <div className="firstChildLecture">
        <div className="lectureHolder">
          <div className="imgHolder">
            <img src="/logo.JPG" alt="image" className="imgLecture" />
          </div>
          <div className="textHolder">
            <div className="descText">
              <p className="plainText">
                React basics class 1 React basics class 1React basics class
                clas1
              </p>
            </div>
            <div className="AuthorName">
              <p className="plainTextAuthor">React basics class</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default lectures;
