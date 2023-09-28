import React, { useRef } from "react";
import nikeVideo from "../../assets/videos/Nike_Find.mp4";
import "./videoPlayer.css";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

const VideoPlayer = () => {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div className="video_player_section">
      <div className="video_player_btn">
        <AiFillPlayCircle onClick={handlePlay} />
        <AiFillPauseCircle onClick={handlePause} />
      </div>
      <div className="video_container">
        <video ref={videoRef}>
          <source src={nikeVideo}></source>
        </video>
      </div>

      <div className="hero__Card">
        <h1>NIKE TECH</h1>
        <p>Engineered to the Exact Specifications of Championship Athletes</p>
        <button>Suit Up</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
