import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      if (location.state?.returnTo) {
        window.location.href = location.state.returnTo;
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <button className="btn btn-primary" onClick={handleGoogleLogin}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
