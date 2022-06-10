import axios from "axios";

export const addPlaylistService = async (token, playlist) => {
  try {
    const { data } = await axios.post(
      "/api/user/playlists",
      { playlist },
      { headers: { authorization: token } }
    );
    return data.playlists;
  } catch (error) {
    console.error(error.message);
    return;
  }
};
