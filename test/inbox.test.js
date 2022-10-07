const assert = require("assert")
const ganache = require("ganache-cli")
const Web3 = require("web3")
const web3 = new Web3(ganache.provider())
const {interface, bytecode} = require("../compile.js")

let accounts
let inbox

beforeEach( async () => {
  accounts = await web3.eth.getAccounts()
  inbox = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({data: bytecode, arguments: ["Hello"]})
      .send({from: accounts[0], gas: 1000000})
})

describe("Inbox", () => {
  it("Deploys the inbox contract", () => {
    console.log(inbox)
  })
})







