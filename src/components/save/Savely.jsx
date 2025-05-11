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
      <div className="videos">
        <video src="https://i.imgur.com/iWYj6Bc.mp4" autoPlay  muted
  loop controls className="videoly"></video>


      </div>
    </div>
  );
};

export default Savely;
