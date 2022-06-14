import axios from "axios";

export const getPlaylistsService = async (token) => {
  try {
    const { data } = await axios.get("/api/user/playlists", {
      headers: {
        authorization: token,
      },
    });
    return data.playlists;
  } catch (error) {
    console.error(error.message);
    return;
  }
};
