require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");

// Ensure your configuration variables are set before executing the script
const { vars } = require("hardhat/config");

// Go to https://alchemy.com, sign up, create a new App in
// its dashboard, and add its key to the configuration variables
const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");

// Add your Sepolia account private key to the configuration variables
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY");

// Go to https://etherscan.io, sign up, and create a new API key
// Add it to the configuration variables
// This is used for verifying contracts on Etherscan
// and for reading contract data from the blockchain
// Note: Etherscan is not available for Sepolia, so this is optional
// but recommended for mainnet and other networks
// If you don't have an Etherscan API key, you can remove the verify plugin
// and the verification step in the deployment script
// or use a different block explorer that supports Sepolia
// For example, you can use https://sepolia.etherscan.io
// and set the API key in the configuration variables
const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  networks: {
    sepolia: {
      url: ALCHEMY_API_KEY,
      accounts: [SEPOLIA_PRIVATE_KEY],
      chainId: 11155111 // Sepolia's chain ID
    }
  }
};