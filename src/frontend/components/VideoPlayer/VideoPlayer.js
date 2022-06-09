import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoId }) => {
  return (
    <div className="video-player">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        width="818px"
        height="500px"
        playing
        controls
      />
    </div>
  );
};

export { VideoPlayer };
