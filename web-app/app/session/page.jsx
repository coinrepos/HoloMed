"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SessionPage() {
  const router = useRouter();
  const [symptoms, setSymptoms] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [temp, setTemp] = useState("");
  const [oxygen, setOxygen] = useState("");

  const submitScan = async () => {
    if (!symptoms || !heartRate || !temp || !oxygen) {
      alert("All fields are required.");
      return;
    }

    await fetch("/api/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        symptoms: symptoms.split(",").map(s => s.trim()),
        vitals: {
          heartRate: parseFloat(heartRate),
          temp: parseFloat(temp),
          oxygen: parseFloat(oxygen),
        }
      })
    });

    router.push("/session-result");
  };

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "600px", margin: "auto" }}>
      <h1>🛰️ Begin HoloScan</h1>
      <p>Enter patient data to trigger diagnostic scan:</p>
      <div>
        <label>Symptoms (comma separated):</label>
        <input type="text" value={symptoms} onChange={e => setSymptoms(e.target.value)} />
        <label>Heart Rate (bpm):</label>
        <input type="number" value={heartRate} onChange={e => setHeartRate(e.target.value)} />
        <label>Temperature (°C):</label>
        <input type="number" value={temp} onChange={e => setTemp(e.target.value)} />
        <label>Oxygen Level (%):</label>
        <input type="number" value={oxygen} onChange={e => setOxygen(e.target.value)} />
        <button onClick={submitScan} style={{ marginTop: "1rem", padding: "0.5rem 1rem", fontSize: "1rem" }}>
          🚀 Run HoloScan
        </button>
      </div>
    </main>
  );
}
