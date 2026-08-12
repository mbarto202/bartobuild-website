import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const clientCode = localStorage.getItem("clientCode");

  if (!clientCode) {
    return <Navigate to="/client-portal" replace />;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-top-right">
        <button className="auth-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>

      <h2 className="dashboard-title">Welcome to Your Dashboard</h2>

      <div className="dashboard-section">
        <h3>📅 Upcoming Appointments</h3>
        <p>No appointments yet. Stay tuned or book one!</p>
        <a
          className="btn btn-primary"
          href="https://calendly.com/michael-d-barto/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
