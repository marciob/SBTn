require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");

const ALCHEMY_API_KEY_URL = `https://arb-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_URL}`;

const ARBITRUM_PRIVATE_KEY = process.env.ARBITRUM_PRIVATE_KEY;

const ARBISCAN_KEY = process.env.ARBISCAN_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    arbitrum: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [ARBITRUM_PRIVATE_KEY],
    },
  },
  // etherscan: {
  //   apiKey: ARBISCAN_KEY,
  // },
  etherscan: {
    apiKey: {
      arbitrumTestnet: ARBISCAN_KEY,
    },
    customChains: [
      {
        network: "arbitrumTestnet",
        chainId: 421613,
        urls: {
          apiURL: "https://api-goerli.arbiscan.io/api",
          browserURL: "https://goerli.arbiscan.io",
        },
      },
    ],
  },
};
