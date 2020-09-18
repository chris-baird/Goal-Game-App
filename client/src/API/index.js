import axios from "axios";
export default {
  registerUser: async (newUser) => {
    try {
      const { data } = await axios.post("/signup", newUser);
      return data;
    } catch (error) {
      throw error;
    }
  },
  loginUser: async function (user) {
    try {
      const {
        data: { token },
      } = await axios.post("/login", user);
      this.setToken(token);
      return user;
    } catch (error) {
      throw error;
    }
  },
  getUserData: async function (email) {
    const token = this.getToken();
    const { data } = await axios.get(
      `/user/profile/${email}/?secret_token=${token}`
    );
    return data;
  },

  setToken: (token) => {
    return localStorage.setItem("token", token);
  },

  getToken: () => {
    return localStorage.getItem("token");
  },
};
