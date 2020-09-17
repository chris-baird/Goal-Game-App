import React, { useState } from "react";

export default function index({ children, user }) {
  return user ? children() : <h1>Unauthorized</h1>;
}
