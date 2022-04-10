import Web3 from 'web3';
import HDWalletProvider from '@truffle/hdwallet-provider';

const provider = new HDWalletProvider(process.env.MNEMONIC!, process.env.INFURA!);
const web3 = new Web3(provider);

export default web3;
