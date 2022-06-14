import { SET_PLAYLISTS, SET_PLAYLIST } from "../constants/playlistConstants";

export const playlistReducer = (state, action) => {
  switch (action.type) {
    case SET_PLAYLISTS:
      return action.payload;

    case SET_PLAYLIST:
      return state.map((playlist) =>
        playlist._id === action.payload._id ? action.payload : playlist
      );

    default:
      return state;
  }
};
