export default {
  getUserToken,
  setUserToken,
};

function getUserToken() {
  return localStorage.getItem("token");
}

function setUserToken(token) {
  return localStorage.setItem("token", token);
}
