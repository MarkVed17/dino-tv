import React, { useState } from "react";
import Moment from "react-moment";
import { nFormatter } from "../../utils/nFormatter";
import { useNavigate } from "react-router-dom";
import { useAuth, useWatchLaterVideos, useHistory } from "../../contexts";
import { PlaylistModal } from "../../components";
import "./HistoryVideoCard.css";

const HistoryVideoCard = ({ video }) => {
  const [kebabMenu, setKebabMenu] = useState(false);
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { watchLaterVideos, addToWatchLaterHandler } = useWatchLaterVideos();
  const { addToHistoryHandler, removeFromHistoryHandler } = useHistory();
  const [showPlaylistsModal, setShowPlaylistsModal] = useState(false);

  return (
    <div
      className="history-video-card"
      onClick={() => {
        addToHistoryHandler(video);
        navigate(`/explore/${video._id}`);
      }}
      key={video._id}
    >
      <img
        src={`https://img.youtube.com/vi/${video._id}/maxresdefault.jpg`}
        alt={`${video.title}`}
        className="history-video-card-thumbnail"
      />
      <div className="history-video-card-content">
        <div className="history-video-card-primary">
          <p className="history-video-card-title">{video.title}</p>
        </div>

        <div className="history-video-card-secondary">
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
        className="material-icons history-video-card-primary-menu"
        onClick={(e) => {
          e.stopPropagation();
          setKebabMenu((kebabMenu) => !kebabMenu);
        }}
      >
        more_vert
      </span>
      {kebabMenu && (
        <div className="history-video-card-kebab-menu">
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
          <span
            onClick={(e) => {
              e.stopPropagation();
              setShowPlaylistsModal(true);
              setKebabMenu(false);
            }}
          >
            <span className="material-icons">playlist_play</span> Save to
            playlist
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              removeFromHistoryHandler(video._id);
            }}
          >
            <span className="material-icons">delete</span>
            Remove from history
          </span>
        </div>
      )}
      {showPlaylistsModal && (
        <PlaylistModal
          video={video}
          closePlaylistsModal={() => setShowPlaylistsModal(false)}
        />
      )}
    </div>
  );
};

export { HistoryVideoCard };
