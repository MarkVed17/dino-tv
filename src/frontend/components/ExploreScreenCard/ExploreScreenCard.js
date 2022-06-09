import React, { useState } from "react";
import "./ExploreScreenCard.css";
import Moment from "react-moment";
import { useAuth, useWatchLaterVideos } from "../../contexts";
import { nFormatter } from "../../utils/nFormatter";
import { useNavigate } from "react-router-dom";

const ExploreScreenCard = ({ video }) => {
  const { _id, title, views, uploadedAt } = video;
  const [kebabMenu, setKebabMenu] = useState(false);
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { watchLaterVideos, addToWatchLaterHandler } = useWatchLaterVideos();

  return (
    <div
      className="explore-video-card"
      onClick={() => navigate(`/explore/${video._id}`)}
    >
      <img
        src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
        alt={`${title}`}
        className="explore-video-card-thumbnail"
      />
      <div className="explore-video-card-primary">
        <p className="explore-video-card-title">{title}</p>
        {auth.status && (
          <span
            className="material-icons explore-video-card-primary-menu"
            onClick={(e) => {
              e.stopPropagation();
              setKebabMenu((kebabMenu) => !kebabMenu);
            }}
          >
            more_vert
          </span>
        )}
        {kebabMenu && (
          <div className="explore-video-card-kebab-menu">
            {watchLaterVideos.find((video) => video._id === _id) ? (
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
                <span className="material-icons">watch_later</span> Save to
                Watch later
              </span>
            )}
            <span>
              <span className="material-icons">playlist_play</span> Save to
              playlist
            </span>
          </div>
        )}
      </div>

      <div className="explore-video-card-secondary">
        <span>{nFormatter(views, 1)} views</span>
        <span className="material-icons explore-video-card-secondary-divider">
          fiber_manual_record
        </span>
        <span>
          <Moment fromNow>{uploadedAt}</Moment>
        </span>
      </div>
    </div>
  );
};

export { ExploreScreenCard };
