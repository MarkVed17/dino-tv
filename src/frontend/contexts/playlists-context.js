import React, { createContext, useContext, useReducer, useEffect } from "react";
import { getPlaylistsService } from "../services";
import { useAuth } from "../contexts";
import { SET_PLAYLISTS } from "../constants/playlistConstants";
import { playlistReducer } from "../reducers/playlistReducer";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [playlists, dispatchPlaylists] = useReducer(playlistReducer, []);
  const { auth } = useAuth();

  useEffect(() => {
    if (auth.status) {
      (async () => {
        const response = await getPlaylistsService(auth.token);
        if (response !== undefined) {
          dispatchPlaylists({ type: SET_PLAYLISTS, payload: response });
        }
      })();
    } else {
      dispatchPlaylists({ type: SET_PLAYLISTS, payload: [] });
    }
  }, [auth]);

  return (
    <PlaylistContext.Provider value={{ playlists, dispatchPlaylists }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylists = () => {
  const context = useContext(PlaylistContext);

  if (context === undefined) {
    throw new Error("usePlaylists must be within a PlaylistProvider");
  }

  return context;
};

export { PlaylistProvider, usePlaylists };
