import React from "react";
import LoginForm from "../components/LoginForm";

function Home({ setUser }) {
  console.log("Home component mounted");
  return (
    <div>
      Home
      <LoginForm setUser={setUser} />
    </div>
  );
}
export default Home;
