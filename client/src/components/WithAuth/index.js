import React from "react";

function index({ children }) {
  try {
    const user = localStorage.getItem("email");
    return user ? children() : <h1>Unauthorized</h1>;
  } catch (error) {
    return <h1>Unauthorized</h1>;
  }
}

export default index;
