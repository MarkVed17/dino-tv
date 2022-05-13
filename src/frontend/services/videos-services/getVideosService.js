import axios from "axios";

export const getVideosService = async () => {
  try {
    const { data } = await axios.get("/api/videos");
    return data.videos;
  } catch (error) {
    console.error(error.message);
    return;
  }
};
