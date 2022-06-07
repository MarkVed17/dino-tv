import axios from "axios";

export const getVideoByIdService = async (videoId) => {
  try {
    const { data } = await axios.get(`/api/video/${videoId}`);
    return data.video;
  } catch (error) {
    console.error(error.message);
    return;
  }
};
