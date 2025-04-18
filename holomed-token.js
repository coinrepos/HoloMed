const fs = require('fs');
const path = require('path');

const TOKEN_RATE = 10; // HMD tokens per valid session
const rewardVaultPath = path.join(__dirname, 'vault', 'rewards.log.json');

function rewardUser(userId, sessionId, feedbackScore) {
    const baseReward = TOKEN_RATE;

    // Boost for high feedback
    const multiplier = feedbackScore > 7 ? 1.5 : feedbackScore < 4 ? 0.5 : 1.0;
    const amount = Math.floor(baseReward * multiplier);

    const rewardEntry = {
        userId,
        sessionId,
        tokensIssued: amount,
        feedbackScore,
        timestamp: new Date().toISOString()
    };

    logReward(rewardEntry);
    console.log(`💰 ${amount} HMD issued to ${userId} for session ${sessionId}`);

    return rewardEntry;
}

function logReward(entry) {
    let logs = [];
    if (fs.existsSync(rewardVaultPath)) {
        logs = JSON.parse(fs.readFileSync(rewardVaultPath, 'utf8'));
    }
    logs.push(entry);
    fs.writeFileSync(rewardVaultPath, JSON.stringify(logs, null, 2));
}

module.exports = { rewardUser };
