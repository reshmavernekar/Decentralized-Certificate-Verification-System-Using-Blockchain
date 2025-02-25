const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const Certificate = await hre.ethers.getContractFactory("Certificate");

  // Deploy the contract (do not use `.deployed()`)
  const certificate = await Certificate.deploy();

  // Wait for the contract to be mined
  await certificate.waitForDeployment();

  // Get deployed contract address
  console.log("Certificate contract deployed to:", await certificate.getAddress());
}

// Run the deployment function
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
