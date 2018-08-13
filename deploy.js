const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'deposit sleep excuse fabric census enlist maple range exercise endless raw sport',
  'https://rinkeby.infura.io/v3/227e8714e7ea40b29450eea871dae294'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: `0x${bytecode}`, arguments: ['Hi there!'] })
    .send({ from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();