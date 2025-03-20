import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import "./dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Dashboard</h2>
      {user ? (
        <p>
          Logged in as: <strong>{user.email}</strong>
        </p>
      ) : (
        <p>Please log in to access your dashboard.</p>
      )}
      <div className="dashboard-content">
        <div className="dashboard-section">
          <h3>Upcoming Appointments</h3>
          {/* Fetch and display Calendly appointments here */}
        </div>
        <div className="dashboard-section">
          <h3>Workout Recommendations</h3>
          {/* Display user-specific workout tips */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
