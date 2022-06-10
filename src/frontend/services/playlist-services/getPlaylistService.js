import axios from "axios";

export const getPlaylistService = async (token, playlistId) => {
  try {
    const { data } = await axios.get(`/api/user/playlists/${playlistId}`, {
      headers: { authorization: token },
    });
    return data.playlist;
  } catch (error) {
    console.error(error.message);
    return;
  }
};
