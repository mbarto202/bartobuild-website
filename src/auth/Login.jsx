import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
      if (location.state?.returnTo) {
        window.location.href = location.state.returnTo;
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert(`Login Failed: ${error.message}`); // Shows the actual error in an alert
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <button
        className="btn btn-primary"
        onClick={handleGoogleLogin}
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login with Google"}
      </button>
    </div>
  );
};

export default Login;
