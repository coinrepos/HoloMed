function analyzeMetrics({ symptoms, vitals, context }) {
  const responses = [];

  if (vitals.heartRate > 120) responses.push("⚠️ High heart rate detected.");
  if (vitals.temp > 38.5) responses.push("🔥 Possible fever.");
  if (vitals.oxygen < 93) responses.push("🫁 Low blood oxygen.");
  if (symptoms.includes("chest pain")) responses.push("❤️ Chest pain noted — cardiac review advised.");
  
  if (responses.length === 0) {
    responses.push("✅ No critical issues detected.");
  }

  return responses;
}

module.exports = { analyzeMetrics };
