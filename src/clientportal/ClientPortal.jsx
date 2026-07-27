import { useState } from "react";
import "./ClientPortal.css";
import { useNavigate } from "react-router-dom";

const ClientPortal = () => {
  const [clientCode, setClientCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `${API_URL}/tracker/validate?clientCode=${clientCode}`,
    );

    if (response.ok) {
      navigate("/dashboard");
    } else {
      setError("Invalid client code.");
    }
  };

  return (
    <section className="client-portal">
      <div className="client-portal-card">
        <button className="back-button" onClick={() => navigate("/")}>
          ← Back
        </button>
        <h1>Client Portal</h1>

        <p className="portal-subtitle">
          Enter your client code to access your dashboard.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter client code"
            value={clientCode}
            onChange={(e) => setClientCode(e.target.value)}
          />

          <button type="submit">Continue</button>
        </form>

        <p className="portal-note">
          Client dashboard is currently under development. Please use the client
          code provided once access becomes available.
        </p>
      </div>
    </section>
  );
};

export default ClientPortal;
