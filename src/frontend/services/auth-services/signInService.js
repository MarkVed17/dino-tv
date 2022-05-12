import axios from "axios";

export const signInService = async (user) => {
  try {
    const { data } = await axios.post("/api/auth/login", {
      email: user.email,
      password: user.password,
    });
    return data;
  } catch (error) {
    console.error(error.message);
    return;
  }
};
