import axios from "axios";

export const removeFromWatchLaterVideos = async (token, id) => {
  try {
    const { data } = await axios.delete(`/api/user/watchlater/${id}`, {
      headers: { authorization: token },
    });
    return data.watchlater;
  } catch (error) {
    console.error(error.message);
    return;
  }
};
