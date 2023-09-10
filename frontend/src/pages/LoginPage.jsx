import React from "react";
import Login from "../components/Login.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function LoginPage() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default LoginPage;
