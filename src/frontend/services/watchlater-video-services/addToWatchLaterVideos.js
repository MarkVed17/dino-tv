import axios from "axios";

export const addToWatchLaterVideos = async (token, video) => {
  try {
    const { data } = await axios.post(
      "/api/user/watchlater",
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data.watchlater;
  } catch (error) {
    console.error(error.message);
    return;
  }
};
