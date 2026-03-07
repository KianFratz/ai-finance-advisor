import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

function App() {
  const [health, setHealth] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/health`)
      .then((res) => setHealth(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: "2rem", maxWidth: 800, margin: "0 auto" }}>
      <h1>Personal Finance AI Advisor</h1>
      <p>Dockerized React + FastAPI starter.</p>

      <section style={{ marginTop: "1.5rem", padding: "1rem", border: "1px solid #ddd", borderRadius: 8 }}>
        <h2>Backend Health</h2>
        {health && <pre>{JSON.stringify(health, null, 2)}</pre>}
        {error && <p style={{ color: "red" }}>Error talking to backend: {error}</p>}
        {!health && !error && <p>Checking backend...</p>}
      </section>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>Next steps</h2>
        <ol>
          <li>Register and log in via the `/auth` endpoints.</li>
          <li>Upload a CSV of transactions via `/transactions/upload`.</li>
          <li>Explore analytics, forecast, and advisor endpoints.</li>
        </ol>
      </section>
    </div>
  );
}

export default App;

