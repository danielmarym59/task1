require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x4a934081ffb8bb42848e6fadf1d344b377c4405b289f08324db800ae4a8d9402"],
    },
  },
};
