require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/yp6RfCudU-vayznFnza8L1DQO2eC8QZO',
      accounts: ['e0827dc8876a99560f24d8f28127f8184577a2ed29c93b532daceba48b4633ce'],
    },
  },
};