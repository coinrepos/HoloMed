// web-app/app/page.jsx
"use client";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Orbitron, sans-serif", background: "#000", color: "#0ff" }}>
      <h1>🧬 Welcome to HoloMed</h1>
      <p>Begin your healing journey with AI-powered diagnostics and decentralized MedBay intelligence.</p>
      <ul>
        <li>📡 Access MedBay: <a href="/session" style={{ color: "#0ff" }}>Run HoloScan</a></li>
        <li>📄 View Reports: <a href="/session-result" style={{ color: "#0ff" }}>Session Results</a></li>
      </ul>
    </main>
  );
}
