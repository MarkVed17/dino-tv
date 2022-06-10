import axios from "axios";

export const addVideoToPlaylistService = async (token, playlistId, video) => {
  try {
    const { data } = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video },
      { headers: { authorization: token } }
    );
    return data.playlist;
  } catch (error) {
    console.error(error.message);
    return;
  }
};
