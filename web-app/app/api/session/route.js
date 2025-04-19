// app/api/session/route.js
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(req) {
  const body = await req.json();
  const { symptoms, vitals } = body;

  const diagnostics = [
    "🧠 HoloScan Activated",
    "🧬 Scan Log:\nTensorHoloScan initialized\nAI Result: Scan complete. No anomalies detected."
  ];

  const session = {
    environment: "MedBay",
    timestamp: new Date().toISOString(),
    diagnostics
  };

  const sessionPath = path.join(process.cwd(), 'public', 'session.json');
  await writeFile(sessionPath, JSON.stringify(session, null, 2));

  return new Response(JSON.stringify(session), { status: 200 });
}
