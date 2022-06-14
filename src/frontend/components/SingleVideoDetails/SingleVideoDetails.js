import React, { useState } from "react";
import Moment from "react-moment";
import "./SingleVideoDetails.css";
import { useAuth, useLikedVideos, useWatchLaterVideos } from "../../contexts";
import { useNavigate } from "react-router-dom";
import { PlaylistModal } from "../../components";

const SingleVideoDetails = ({ video }) => {
  const { _id, title, views, uploadedAt, description } = video;
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { likedVideos, likeVideoHandler, unlikeVideoHandler } =
    useLikedVideos();
  const {
    watchLaterVideos,
    addToWatchLaterHandler,
    removeFromWatchLaterHandler,
  } = useWatchLaterVideos();
  const [showPlaylistsModal, setShowPlaylistsModal] = useState(false);

  return (
    <div className="video-details">
      <div className="video-title">{title}</div>
      <div className="video-stats">
        <span>{views} views</span>
        <span className="material-icons video-card-secondary-divider">
          fiber_manual_record
        </span>
        <span>
          <Moment fromNow>{uploadedAt}</Moment>
        </span>
        <div className="video-actions">
          {likedVideos.find((video) => video._id === _id) ? (
            <span
              className="material-icons video-card-actions"
              title="I like this"
              onClick={() => unlikeVideoHandler(_id)}
            >
              thumb_up
            </span>
          ) : (
            <span
              className="material-icons-outlined video-card-actions liked-video"
              title="I like this"
              onClick={() =>
                auth.status ? likeVideoHandler(video) : navigate("/signin")
              }
            >
              thumb_up
            </span>
          )}
          {watchLaterVideos.find((video) => video._id === _id) ? (
            <span
              className="material-icons video-card-actions"
              title="I will watch this later"
              onClick={() => removeFromWatchLaterHandler(_id)}
            >
              watch_later
            </span>
          ) : (
            <span
              className="material-icons-outlined video-card-actions"
              title="I will watch this later"
              onClick={() =>
                auth.status
                  ? addToWatchLaterHandler(video)
                  : navigate("/signin")
              }
            >
              watch_later
            </span>
          )}
          <span
            className="material-icons-outlined video-card-actions"
            title="Add to a playlist"
            onClick={(e) => {
              e.stopPropagation();
              setShowPlaylistsModal(true);
            }}
          >
            playlist_add
          </span>
        </div>
      </div>
      <div className="video-description">{description}</div>
      {showPlaylistsModal && (
        <PlaylistModal
          video={video}
          closePlaylistsModal={() => setShowPlaylistsModal(false)}
        />
      )}
    </div>
  );
};

export { SingleVideoDetails };
