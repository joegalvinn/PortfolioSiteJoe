import React from "react";
import "./trackStarVideo.css";

const TrackStarVideoPlayer = ({
  src = "/TrackStar Video.mp4",
  autoplay = false,
  loop = false,
  muted = false,
}) => {
  return (
    <video
      src={src}
      autoPlay={autoplay}
      loop={loop}
      muted={muted}
      className="video-player"
    />
  );
};

export default TrackStarVideoPlayer;
