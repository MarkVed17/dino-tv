import React, { useState } from "react";
import Moment from "react-moment";
import { nFormatter } from "../../utils/nFormatter";
import { useNavigate } from "react-router-dom";
import "./RecommendedVideoCard.css";

const RecommendedVideoCard = ({ video }) => {
  const [kebabMenu, setKebabMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="recommended-video-card"
      onClick={() => navigate(`/explore/${video._id}`)}
      key={video._id}
    >
      <img
        src={`https://img.youtube.com/vi/${video._id}/maxresdefault.jpg`}
        alt={`${video.title}`}
        className="recommended-video-card-thumbnail"
      />
      <div className="recommended-video-card-content">
        <div className="recommended-video-card-primary">
          <p className="recommended-video-card-title">{video.title}</p>
        </div>

        <div className="recommended-video-card-secondary">
          <span>{nFormatter(video.views, 1)} views</span>
          <span className="material-icons video-card-secondary-divider">
            fiber_manual_record
          </span>
          <span>
            <Moment fromNow>{video.uploadedAt}</Moment>
          </span>
        </div>
      </div>
      <span
        className="material-icons recommended-video-card-primary-menu"
        onClick={(e) => {
          e.stopPropagation();
          setKebabMenu((kebabMenu) => !kebabMenu);
        }}
      >
        more_vert
      </span>
      {kebabMenu && (
        <div className="recommended-video-card-kebab-menu">
          <span>
            <span className="material-icons">watch_later</span> Save to Watch
            later
          </span>
          <span>
            <span className="material-icons">playlist_play</span> Save to
            playlist
          </span>
        </div>
      )}
    </div>
  );
};

export { RecommendedVideoCard };