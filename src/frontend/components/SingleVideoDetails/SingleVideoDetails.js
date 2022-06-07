import React from "react";
import Moment from "react-moment";
import "./SingleVideoDetails.css";

const SingleVideoDetails = ({ video }) => {
  return (
    <div className="video-details">
      <div className="video-title">{video.title}</div>
      <div className="video-stats">
        <span>{video.views} views</span>
        <span className="material-icons video-card-secondary-divider">
          fiber_manual_record
        </span>
        <span>
          <Moment fromNow>{video.uploadedAt}</Moment>
        </span>
        <div className="video-actions">
          <span
            className="material-icons-outlined video-card-actions"
            title="I like this"
          >
            thumb_up
          </span>
          <span
            className="material-icons-outlined video-card-actions"
            title="I will watch this later"
          >
            watch_later
          </span>
          <span
            className="material-icons-outlined video-card-actions"
            title="Add to a playlist"
          >
            playlist_add
          </span>
        </div>
      </div>
      <div className="video-description">{video.description}</div>
    </div>
  );
};

export { SingleVideoDetails };
