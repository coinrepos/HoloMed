// app/session-result/page.jsx
"use client";
import { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function SessionResult() {
  const [data, setData] = useState(null);
  const resultRef = useRef();

  useEffect(() => {
    fetch("/session.json")
      .then(res => res.json())
      .then(setData)
      .catch(() => setData({ diagnostics: ["⚠️ Failed to load scan data."], environment: "Unknown", timestamp: "Pending..." }));
  }, []);

  const exportPDF = () => {
    if (!resultRef.current) return;
    html2canvas(resultRef.current).then(canvas => {
      const pdf = new jsPDF();
      pdf.text("HoloMed Scan Report", 20, 20);
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 15, 30, 180, 150);
      pdf.save("holoscan_report.pdf");
    });
  };

  if (!data) return <p>Loading scan data...</p>;

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <div ref={resultRef}>
        <h1>🧪 Holographic Scan Result</h1>
        <p><strong>Environment:</strong> {data.environment}</p>
        <p><strong>Timestamp:</strong> {data.timestamp}</p>
        <ul>
          {data.diagnostics.map((line, i) => <li key={i}>{line}</li>)}
        </ul>
      </div>
      <button onClick={exportPDF} style={{ marginTop: "2rem" }}>📄 Export to PDF</button>
    </main>
  );
}
