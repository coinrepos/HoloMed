// web-app/app/stream/page.jsx

export default function StreamPage() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🔬 HoloScan Live Results</h1>
      <p>View the latest TensorHoloScan imaging outputs.</p>

      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
        <div>
          <h3>Amplitude Map</h3>
          <img src="/scans/amp.png" width="300" alt="Amplitude Map" />
        </div>
        <div>
          <h3>Phase Map</h3>
          <img src="/scans/phs.png" width="300" alt="Phase Map" />
        </div>
      </div>
    </div>
  );
}
