import { PromiseProvider } from "mongoose";
import React, { useState } from "react";

function index({ children, user }) {
  return user ? children() : <h1>Unauthorized</h1>;
}

export default index;
