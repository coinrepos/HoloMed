async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  const Token = await ethers.getContractFactory("HoloMedToken");
  const token = await Token.deploy();
  await token.deployed();

  console.log("✅ HMD Token deployed at:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
