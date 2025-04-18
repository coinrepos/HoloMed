export async function POST(req) {
  const body = await req.json();
  const { symptoms, vitals } = body;

  // Simulate AI diagnostics
  const response = {
    environment: "Theta Pulse Protocol",
    diagnostics: [
      "Heart rate elevated — suggest calming routine.",
      "Symptoms noted: " + symptoms.join(', ')
    ]
  };

  return new Response(JSON.stringify(response), { status: 200 });
}
