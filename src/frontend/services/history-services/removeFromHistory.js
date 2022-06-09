import axios from "axios";

export const removeFromHistory = async (token, id) => {
  try {
    const { data } = await axios.delete(`/api/user/history/${id}`, {
      headers: {
        authorization: token,
      },
    });
    return data.history;
  } catch (error) {
    console.error(error.message);
    return;
  }
};
