import axios from "axios";
export default {
  registerUser: async (newUser) => {
    const { data } = await axios.post("/signup", newUser);
    return data;
  },
  loginUser: async function (user) {
    const {
      data: { token },
    } = await axios.post("/login", user);
    this.setToken(token);
    return user;
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
