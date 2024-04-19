import React from "react";
import "../ComponentsStyle/videoScreen.css";
function videoScreen() {
  return (
    <div>
      <div className="parentScreen">
        <div className="firstChildScreen">
          <div className="videoHolder">
            <video autoPlay muted loop className="videoScreen">
              <source
                src="/production_id_4017225 (2160p).mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default videoScreen;
