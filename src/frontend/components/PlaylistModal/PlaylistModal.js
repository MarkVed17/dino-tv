import React, { useState } from "react";
import { usePlaylists, useAuth } from "../../contexts";
import {
  addPlaylistService,
  addVideoToPlaylistService,
  removeVideoFromPlaylistService,
} from "../../services";
import { SET_PLAYLIST, SET_PLAYLISTS } from "../../constants/playlistConstants";
import "./PlaylistModal.css";

const PlaylistModal = ({ video, closePlaylistsModal }) => {
  const [showPlaylistModalForm, setShowPlaylistModalForm] = useState(false);
  const [newPlaylist, setNewPlaylist] = useState({
    title: "",
    description: "",
  });
  const { auth } = useAuth();
  const { playlists, dispatchPlaylists } = usePlaylists();

  const addPlaylistHandler = async () => {
    const addToPlaylistResponse = await addPlaylistService(
      auth.token,
      newPlaylist
    );

    if (addToPlaylistResponse !== undefined) {
      dispatchPlaylists({
        type: SET_PLAYLISTS,
        payload: addToPlaylistResponse,
      });
      setNewPlaylist({ title: "", description: "" });
    }
  };

  const addVideoToPlaylistHandler = async (playlistId) => {
    const addVideoToPlaylistResponse = await addVideoToPlaylistService(
      auth.token,
      playlistId,
      video
    );

    if (addVideoToPlaylistResponse !== undefined) {
      dispatchPlaylists({
        type: SET_PLAYLIST,
        payload: addVideoToPlaylistResponse,
      });
    }
  };

  const removeVideoFromPlaylistHandler = async (playlistId) => {
    const removeVideoFromPlaylistResponse =
      await removeVideoFromPlaylistService(auth.token, playlistId, video._id);
    if (removeVideoFromPlaylistResponse !== undefined) {
      dispatchPlaylists({
        type: SET_PLAYLIST,
        payload: removeVideoFromPlaylistResponse,
      });
    }
  };

  return (
    <div className="playlist-modal" onClick={(e) => e.stopPropagation()}>
      <div className="playlist-modal-container">
        <div className="playlist-modal-header">
          <h2 className="playlist-modal-heading">Save to...</h2>
          <span
            className="material-icons playlist-modal-close-icon"
            onClick={closePlaylistsModal}
          >
            close
          </span>
        </div>
        <div className="playlist-modal-options">
          {playlists.map((playlist) => (
            <div className="playlist-toggle-group" key={playlist._id}>
              <input
                type="checkbox"
                placeholder="foo"
                className="playlist-toggle-input"
                required
                checked={
                  playlist.videos.find(
                    (playlistVideo) => playlistVideo._id === video._id
                  )
                    ? true
                    : false
                }
                onChange={(e) =>
                  e.target.checked
                    ? addVideoToPlaylistHandler(playlist._id)
                    : removeVideoFromPlaylistHandler(playlist._id)
                }
              />
              <label
                htmlFor="playlist-title"
                className="playlist-options-title"
              >
                {playlist.title}
              </label>
            </div>
          ))}
        </div>
        {showPlaylistModalForm ? (
          <form
            className="playlist-form"
            onSubmit={(e) => {
              e.preventDefault();
              addPlaylistHandler();
            }}
          >
            <div className="input-group">
              <label htmlFor="playlist-title" className="playlist-modal-label">
                Title
              </label>
              <input
                type="text"
                placeholder="foo"
                className="input standard playlist-title-input"
                required
                value={newPlaylist.title}
                onChange={(e) =>
                  setNewPlaylist({
                    ...newPlaylist,
                    title: e.target.value,
                  })
                }
              />
            </div>
            <div className="input-group">
              <label
                htmlFor="playlist-description"
                className="playlist-modal-label"
              >
                Description
              </label>
              <textarea
                type="text"
                placeholder="bar bar bar"
                cols="20"
                rows="2"
                className="playlist-modal-description"
                required
                value={newPlaylist.description}
                onChange={(e) =>
                  setNewPlaylist({
                    ...newPlaylist,
                    description: e.target.value,
                  })
                }
              />
            </div>
            <button
              className="btn btn-brand btn-accent create-playlist-btn"
              type="submit"
            >
              Create
            </button>
          </form>
        ) : (
          <button
            className="btn btn-brand btn-accent create-playlist-btn"
            onClick={(e) => {
              e.stopPropagation();
              setShowPlaylistModalForm(true);
            }}
          >
            Create new playlist
          </button>
        )}
      </div>
    </div>
  );
};

export { PlaylistModal };
