import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import "./details.css";
import vi from "../../video/vip.mp4";

const Two = () => {
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
      <div className="video_containers">
        <video autoPlay muted loop  className="fv" src={vi} ref={videoRef}></video>

        {/* Play/Pause Button */}
        <div className="dorn">
          <button className="custom_play_btn" onClick={togglePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>

        <div className="text_d">
          <p className="text_p">
            Two are better than one, because they have a good reward for their toil.
            For if they fall, one will lift up the other;
            <br />
            <br />
            <span className="lqq">Ecclesiastes 4:9-10</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Two;
