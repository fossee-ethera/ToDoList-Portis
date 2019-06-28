require('dotenv').config();
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    "ropsten-infura": {
      provider: () => new HDWalletProvider(process.env.TEST_MNEMONIC, "https://ropsten.infura.io/v3/"+process.env.INFURA_KEY, 2),
      network_id: 3,
      gas: 7500000,
      gasPrice: 100000000000
    }
  },
  // rpc: {
  //   host: 'localhost',
  //   post:8080
  //     },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
