import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PlaylistVideoCard } from "../../components";
import { SET_PLAYLISTS } from "../../constants/playlistConstants";
import { useAuth, usePlaylists } from "../../contexts";
import { getPlaylistService, removePlaylistService } from "../../services";
import "./PlaylistScreen.css";

const PlaylistScreen = () => {
  const { playlistId } = useParams();
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { dispatchPlaylists } = usePlaylists();
  const [playlist, setPlaylist] = useState({});

  useEffect(() => {
    (async () => {
      const response = await getPlaylistService(auth.token, playlistId);
      if (response !== undefined) {
        setPlaylist(response);
      }
    })();
  }, [playlist, playlistId, auth]);

  const removePlaylistHandler = async () => {
    const removePlaylistResponse = await removePlaylistService(
      auth.token,
      playlistId
    );

    if (removePlaylistResponse !== undefined) {
      dispatchPlaylists({
        type: SET_PLAYLISTS,
        payload: removePlaylistResponse,
      });
      navigate("/explore");
    }
  };

  return (
    <div className="main-content">
      {playlist.videos ? (
        <div className="playlist-videos-content">
          <div className="playlist-video-banner">
            <img
              src={
                playlist.videos.length !== 0
                  ? `https://img.youtube.com/vi/${
                      playlist.videos[playlist.videos.length - 1]._id
                    }/maxresdefault.jpg`
                  : `/assets/Thumbnail/jurassic-park-default-playlist-thumbnail.jpg`
              }
              alt="Playlist Video Banner"
              className="playlist-video-banner-img"
            />
            <div className="playlist-videos-banner-label">
              <span className="material-icons playlist-videos-banner-icon">
                playlist_play
              </span>
              <div className="playlist-videos-banner-text">
                {playlist.title}
              </div>
            </div>
            <button
              className="btn btn-brand btn-accent clear-playlist-btn"
              onClick={() => removePlaylistHandler()}
            >
              Delete Playlist
            </button>
          </div>

          <div className="playlist-videos-list">
            {playlist.videos
              .map((video) => (
                <PlaylistVideoCard
                  key={video._id}
                  video={video}
                  playlistId={playlistId}
                />
              ))
              .reverse()}
          </div>
        </div>
      ) : (
        <div className="placeholder">No Playlist</div>
      )}
    </div>
  );
};

export { PlaylistScreen };
