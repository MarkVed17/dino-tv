import React, { useRef, useState } from "react";
import Moment from "react-moment";
import { nFormatter } from "../../utils/nFormatter";
import { useNavigate } from "react-router-dom";
import {
  useAuth,
  useWatchLaterVideos,
  useHistory,
  usePlaylists,
} from "../../contexts";
import "./PlaylistVideoCard.css";
import { removeVideoFromPlaylistService } from "../../services";
import { SET_PLAYLIST } from "../../constants/playlistConstants";
import { PlaylistModal } from "../../components";
import { useOnClickOutside } from "../../hooks";

const PlaylistVideoCard = ({ video, playlistId }) => {
  const [kebabMenu, setKebabMenu] = useState(false);
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { watchLaterVideos, addToWatchLaterHandler } = useWatchLaterVideos();
  const { addToHistoryHandler } = useHistory();
  const { dispatchPlaylists } = usePlaylists();
  const [showPlaylistsModal, setShowPlaylistsModal] = useState(false);

  const removeVideoFromPlaylistHandler = async () => {
    const removeVideoFromPlaylistResponse =
      await removeVideoFromPlaylistService(auth.token, playlistId, video._id);
    if (removeVideoFromPlaylistResponse !== undefined) {
      dispatchPlaylists({
        type: SET_PLAYLIST,
        payload: removeVideoFromPlaylistResponse,
      });
    }
  };

  const ref = useRef();
  useOnClickOutside(ref, () => setKebabMenu(false));

  return (
    <div
      className="playlist-video-card"
      onClick={() => {
        addToHistoryHandler(video);
        navigate(`/explore/${video._id}`);
      }}
      key={video._id}
    >
      <img
        src={`https://img.youtube.com/vi/${video._id}/maxresdefault.jpg`}
        alt={`${video.title}`}
        className="playlist-video-card-thumbnail"
      />
      <div className="playlist-video-card-content">
        <div className="playlist-video-card-primary">
          <p className="playlist-video-card-title">{video.title}</p>
        </div>

        <div className="playlist-video-card-secondary">
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
        className="material-icons playlist-video-card-primary-menu"
        onClick={(e) => {
          e.stopPropagation();
          setKebabMenu((kebabMenu) => !kebabMenu);
        }}
      >
        more_vert
      </span>
      {kebabMenu && (
        <div ref={ref} className="playlist-video-card-kebab-menu">
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
              removeVideoFromPlaylistHandler();
            }}
          >
            <span className="material-icons">delete</span>
            Remove from playlist
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

export { PlaylistVideoCard };
