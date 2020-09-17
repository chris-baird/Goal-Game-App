import React from "react";
import RegisterForm from "../components/RegisterForm";

function Register({ setUser, user }) {
  return (
    <div>
      Register
      <RegisterForm user={user} setUser={setUser} />
    </div>
  );
}
export default Register;
