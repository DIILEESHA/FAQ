import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import save from "../../video/savely.mp4";
import "./save.css";

const Savely = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="two_container">
      <div className="video_containers" id="save-the-date">
        <video
          autoPlay
          muted
          loop
          className="fv"
          src={save}
          ref={videoRef}
        ></video>

        {/* Play/Pause Button */}


        <div className="dorn">

        <button className="custom_play_btn" onClick={togglePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        </div>

        <div className="text_d">
          <img src="https://i.imgur.com/hXNnZlg.png" alt="" className="saver" />
        </div>
      </div>
    </div>
  );
};

export default Savely;
