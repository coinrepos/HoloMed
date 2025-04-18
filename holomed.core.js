const { launchMedBedSession } = require('./medbed.interface');

const results = await intakeAndEvaluateHealth({
    userId: "usr_001X",
    symptoms: ["fatigue", "chest pain"],
    vitals: { heartRate: 130, temp: 37.9, oxygen: 91 },
    meta: { sessionId: "X-HEAL-0001" }
});

launchMedBedSession(results, "usr_001X");
