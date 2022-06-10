import axios from "axios";

export const removePlaylistService = async (token, playlistId) => {
  try {
    const { data } = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: { authorization: token },
    });
    return data.playlists;
  } catch (error) {
    console.error(error.message);
    return;
  }
};
