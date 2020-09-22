import React from "react";
import LoginForm from "../components/LoginForm";

function Home({ setUser, user }) {
  console.log("Home component mounted");
  return (
    <div>
      Home
      <LoginForm user={user} setUser={setUser} />
    </div>
  );
}
export default Home;
