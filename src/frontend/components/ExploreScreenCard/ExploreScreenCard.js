import React, { useState } from "react";
import "./ExploreScreenCard.css";
import Moment from "react-moment";
import { nFormatter } from "../../utils/nFormatter";
import { useNavigate } from "react-router-dom";

const ExploreScreenCard = ({ video }) => {
  const { _id, title, views, uploadedAt } = video;
  const [kebabMenu, setKebabMenu] = useState(false);
  const navigate = useNavigate();

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
        <span
          className="material-icons explore-video-card-primary-menu"
          onClick={() => setKebabMenu((kebabMenu) => !kebabMenu)}
        >
          more_vert
        </span>
        {kebabMenu && (
          <div className="explore-video-card-kebab-menu">
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
