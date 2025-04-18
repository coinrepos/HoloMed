const fs = require('fs');
const path = require('path');

// Define a simple healing session engine
function launchMedBedSession(diagnostics, userId) {
    console.log(`🛏️ Launching MedBed session for user: ${userId}`);

    // Generate environment suggestion based on condition
    const environment = suggestHealingEnvironment(diagnostics);
    const sessionData = {
        userId,
        diagnostics,
        environment,
        startedAt: new Date().toISOString()
    };

    logSession(sessionData);
    displaySession(sessionData);

    return sessionData;
}

function suggestHealingEnvironment(diagnostics) {
    // Later, map conditions to frequencies, visuals, meditative guidance
    if (diagnostics.some(d => d.includes("heart"))) {
        return "Calm Ocean w/ 432Hz pulse";
    } else if (diagnostics.some(d => d.includes("infection"))) {
        return "Warm Lightfield + Immune Boost Visualization";
    } else if (diagnostics.some(d => d.includes("fatigue"))) {
        return "Deep Theta Chamber – Recharge Protocol";
    } else {
        return "Green Forest Pulse – Restorative Neutral Zone";
    }
}

function displaySession(session) {
    console.log(`🎧 MedBed Environment: ${session.environment}`);
    console.log(`🧠 Initiated based on:`);
    session.diagnostics.forEach((line, idx) => {
        console.log(`   ${idx + 1}. ${line}`);
    });
    console.log(`🛏️ Session live. Record perception feedback after 15 minutes.`);
}

function logSession(session) {
    const logPath = path.join(__dirname, 'vault', `session_${session.userId}_${Date.now()}.json`);
    fs.writeFileSync(logPath, JSON.stringify(session, null, 2));
}

module.exports = { launchMedBedSession };
