import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-circom";
import "@nomiclabs/hardhat-etherscan";

// circuits
import circuits = require('./circuits.config.json')

// import 'dotenv/config'

// // set env var to the root of the project
process.env.BASE_PATH = __dirname;

// tasks
import "./tasks/newcircuit.ts"

const config: HardhatUserConfig = {
  defaultNetwork: "mumbai",
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
      {
        version: "0.6.11",
      }
    ]
  },
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/640880ad4a7f493c8e8b8156549c317d",
      accounts: [ "WRITEYOURPVTKEY" ]
    },
  },
  circom: {
    // (optional) Base path for input files, defaults to `./circuits/`
    inputBasePath: "./circuits",
    // (required) The final ptau file, relative to inputBasePath, from a Phase 1 ceremony
    ptau: "powersOfTau28_hez_final_12.ptau",
    // (required) Each object in this array refers to a separate circuit
    circuits: JSON.parse(JSON.stringify(circuits))
  },
};



export default config;