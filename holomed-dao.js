// DAO Hook: Creates fund allocation proposal to support users or initiatives
function generateHealthProposal(userId, reason, amountHMD) {
    return {
        title: `Wellness Fund Allocation for ${userId}`,
        description: `Propose funding ${amountHMD} HMD for: ${reason}`,
        beneficiary: userId,
        amount: amountHMD,
        createdAt: new Date().toISOString(),
        status: "PENDING DAO VOTE"
    };
}

module.exports = { generateHealthProposal };
