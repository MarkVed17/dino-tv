import axios from "axios";

export const addToHistory = async (token, video) => {
  try {
    const { data } = await axios.post(
      "/api/user/history",
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data.history;
  } catch (error) {
    console.error(error.message);
  }
};
