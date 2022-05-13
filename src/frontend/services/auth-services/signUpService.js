import axios from "axios";

export const signUpService = async (user) => {
  try {
    const { data } = await axios.post("/api/auth/signup", {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    });
    return data;
  } catch (error) {
    console.error(error.message);
    return;
  }
};