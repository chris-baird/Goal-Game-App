import React from "react";
import LoginForm from "../components/LoginForm";

function Home({ setUser }) {
  return (
    <div>
      Home
      <LoginForm setUser={setUser} />
    </div>
  );
}
export default Home;
