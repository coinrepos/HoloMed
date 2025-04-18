export async function GET() {
  const proposals = [
    {
      title: "Sponsor Recovery for Patient A",
      description: "Requesting 1000 HMD to support verified recovery report.",
      amount: 1000
    },
    {
      title: "Fund Remote MedBed Unit (Rural)",
      description: "Expansion into off-grid zone via solar deploy.",
      amount: 2500
    }
  ];

  return new Response(JSON.stringify(proposals), { status: 200 });
}
