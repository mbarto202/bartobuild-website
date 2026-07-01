import { useState } from "react";
import "./ClientPortal.css";

const ClientPortal = () => {
  const [clientCode, setClientCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Client Code:", clientCode);

    alert("Client dashboard coming soon!");
  };

  return (
    <section className="client-portal">
      <div className="client-portal-card">
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

        <p className="portal-note">Client dashboard access coming soon.</p>
      </div>
    </section>
  );
};

export default ClientPortal;
