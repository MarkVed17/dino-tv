import axios from "axios";

export const removeVideoFromPlaylistService = async (
  token,
  playlistId,
  videoId
) => {
  try {
    const { data } = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      { headers: { authorization: token } }
    );
    return data.playlist;
  } catch (error) {
    console.error(error.message);
    return;
  }
};
