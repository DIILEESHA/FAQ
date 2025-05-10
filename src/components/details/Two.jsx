import React from "react";
import "./details.css";
import vi from "../../video/vip.mp4";

const Two = () => {
  return (
    <div className="two_container">
      <div className="video_container">
        <video autoPlay className="fv" src={vi}></video>

        <div className="text_d">
          <p className="text_p">
            Two are better than one, because they have a good reward for their
            toil. For if they fall, one will lift up the other;
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
