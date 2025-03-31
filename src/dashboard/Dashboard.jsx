import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import "./dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">
        {user
          ? `Welcome, ${user.displayName || "Athlete"}!`
          : "Welcome to Your Dashboard"}
      </h2>
      <p className="dashboard-subtitle">
        {user
          ? `Logged in as: ${user.email}`
          : "Please log in to access your dashboard."}
      </p>

      <div className="dashboard-content">
        <div className="dashboard-section">
          <h3>📅 Upcoming Appointments</h3>
          <p>No appointments yet. Stay tuned or book one!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
