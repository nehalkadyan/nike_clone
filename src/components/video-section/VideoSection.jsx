import React from "react";
import "./videoSection.css";
import nikeVideo from "../../assets/videos/Nike_Ad.mp4";

const VideoSection = ({ video, videoTitle, videoPara, videoBtn }) => {
  const clip = document.querySelectorAll(".clip");
  for (let i = 0; i < clip.length; i++) {
    clip[i].addEventListener("mouseenter", function (e) {
      clip[i].play();
    });

    clip[i].addEventListener("mouseout", function (e) {
      clip[i].pause();
    });
  }

  return (
    <div className="video__section">
      <div className="heading">
        <span>Just In</span>
      </div>
      <div className="video__container">
        <video
          muted
          className="clip"
          src={nikeVideo}
          alt="video"
          type="video/mp4"
          loop
        />
      </div>

      <div className="hero__Card">
        <h1>{videoTitle}</h1>
        <p>{videoPara}</p>
        <button>{videoBtn}</button>
      </div>
    </div>
  );
};

export default VideoSection;
