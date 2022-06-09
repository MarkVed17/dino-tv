import React, { useState } from "react";
import Moment from "react-moment";
import { nFormatter } from "../../utils/nFormatter";
import { useNavigate } from "react-router-dom";
import { useWatchLaterVideos } from "../../contexts";
import "./WatchLaterVideoCard.css";

const WatchLaterVideoCard = ({ video }) => {
  const [kebabMenu, setKebabMenu] = useState(false);
  const { removeFromWatchLaterHandler } = useWatchLaterVideos();
  const navigate = useNavigate();

  return (
    <div
      className="watch-later-video-card"
      onClick={() => navigate(`/explore/${video._id}`)}
      key={video._id}
    >
      <img
        src={`https://img.youtube.com/vi/${video._id}/maxresdefault.jpg`}
        alt={`${video.title}`}
        className="watch-later-video-card-thumbnail"
      />
      <div className="watch-later-video-card-content">
        <div className="watch-later-video-card-primary">
          <p className="watch-later-video-card-title">{video.title}</p>
        </div>

        <div className="watch-later-video-card-secondary">
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
        className="material-icons watch-later-video-card-primary-menu"
        onClick={(e) => {
          e.stopPropagation();
          setKebabMenu((kebabMenu) => !kebabMenu);
        }}
      >
        more_vert
      </span>
      {kebabMenu && (
        <div className="watch-later-video-card-kebab-menu">
          <span>
            <span className="material-icons">playlist_play</span> Save to
            playlist
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              removeFromWatchLaterHandler(video._id);
            }}
          >
            <span className="material-icons">delete</span>
            Remove from Watch Later
          </span>
        </div>
      )}
    </div>
  );
};

export { WatchLaterVideoCard };