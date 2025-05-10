import React from "react";
import save from "../../video/savely.mp4";
import "./save.css"
const Savely = () => {
  return (
    <div className="two_container">

      
      <div className="video_containers" id="save-the-date">
        <video autoPlay className="fv" src={save}></video>

        <div className="text_d">
         <img src="https://i.imgur.com/hXNnZlg.png" alt="" className="saver" />
        </div>
      </div>
    </div>
  );
};

export default Savely;
