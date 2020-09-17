import axios from "axios";
export default {
  registerUser: async (newUser) => {
    console.log("inside register");
    const { data } = await axios.post("/signup", newUser);
    return data;
  },
  loginUser: async function (user) {
    console.log(user);
    console.log("inside login");
    const {
      data: { token },
    } = await axios.post("/login", user);
    this.setToken(token);
    return user;
  },
  setToken: (token) => {
    return localStorage.setItem("token", token);
  },
};
