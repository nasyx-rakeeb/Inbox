const HdWalletProvider = require("@truffle/hdwallet-provider")
const Web3 = require("web3")
const {interface, bytecode} = require("./compile.js")
const phrase = "hollow attitude clinic tool middle business dice spread drift jaguar panel chest"
const url = "https://goerli.infura.io/v3/9f935a0dec1f43d4aaa7b618ebbf0294"
const provider = new HdWalletProvider(phrase, )
const web3 = new Web3(provider)

const deploy = async () => {
  
}

deploy()