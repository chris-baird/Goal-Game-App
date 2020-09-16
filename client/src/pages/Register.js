import React from "react";
import RegisterForm from "../components/RegisterForm";

function Register({ setUser }) {
  return (
    <div>
      Register
      <RegisterForm setUser={setUser} />
    </div>
  );
}
export default Register;
