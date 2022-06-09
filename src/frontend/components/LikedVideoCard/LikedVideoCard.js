import React, { useState } from "react";
import Moment from "react-moment";
import { nFormatter } from "../../utils/nFormatter";
import { useNavigate } from "react-router-dom";
import { useAuth, useLikedVideos, useWatchLaterVideos } from "../../contexts";
import "./LikedVideoCard.css";

const LikedVideoCard = ({ video }) => {
  const [kebabMenu, setKebabMenu] = useState(false);
  const { unlikeVideoHandler } = useLikedVideos();
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { watchLaterVideos, addToWatchLaterHandler } = useWatchLaterVideos();

  return (
    <div
      className="liked-video-card"
      onClick={() => navigate(`/explore/${video._id}`)}
      key={video._id}
    >
      <img
        src={`https://img.youtube.com/vi/${video._id}/maxresdefault.jpg`}
        alt={`${video.title}`}
        className="liked-video-card-thumbnail"
      />
      <div className="liked-video-card-content">
        <div className="liked-video-card-primary">
          <p className="liked-video-card-title">{video.title}</p>
        </div>

        <div className="liked-video-card-secondary">
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
        className="material-icons liked-video-card-primary-menu"
        onClick={(e) => {
          e.stopPropagation();
          setKebabMenu((kebabMenu) => !kebabMenu);
        }}
      >
        more_vert
      </span>
      {kebabMenu && (
        <div className="liked-video-card-kebab-menu">
          {watchLaterVideos.find(
            (watchLaterVideo) => watchLaterVideo._id === video._id
          ) ? (
            <span
              onClick={(e) => {
                e.stopPropagation();
                auth.status ? navigate("/watchlater") : navigate("/signin");
              }}
            >
              <span className="material-icons">watch_later</span> Go to Watch
              later
            </span>
          ) : (
            <span
              onClick={(e) => {
                e.stopPropagation();
                auth.status
                  ? addToWatchLaterHandler(video)
                  : navigate("/signin");
              }}
            >
              <span className="material-icons">watch_later</span> Save to Watch
              later
            </span>
          )}
          {/* <span>
            <span className="material-icons">watch_later</span> Save to Watch
            later
          </span> */}
          <span>
            <span className="material-icons">playlist_play</span> Save to
            playlist
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              unlikeVideoHandler(video._id);
            }}
          >
            <span className="material-icons">delete</span>
            Remove from Liked videos
          </span>
        </div>
      )}
    </div>
  );
};

export { LikedVideoCard };
