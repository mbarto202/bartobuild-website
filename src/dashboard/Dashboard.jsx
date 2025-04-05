import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom"; // <-- import navigate hook
import "./dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // <-- initialize navigate

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
    return () => unsubscribe();
  }, []);

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">
        {user
          ? `Welcome, ${user.displayName || "Athlete"}!`
          : "Welcome to Your Dashboard"}
      </h2>

      {!user && (
        <p className="dashboard-subtitle">
          Please log in to access your dashboard.
        </p>
      )}

      <div className="dashboard-content">
        <div className="dashboard-section">
          <h3>📅 Upcoming Appointments</h3>
          <p>No appointments yet. Stay tuned or book one!</p>
        </div>
      </div>

      {/* 🏠 Back to homepage button */}
      <button className="dashboard-home-btn" onClick={handleBackHome}>
        ⬅ Back to Home
      </button>
    </div>
  );
};

export default Dashboard;
