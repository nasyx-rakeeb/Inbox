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
    assert.ok(inbox.options.address)
  })


  it("Has a default msg", async () => {
    const message = await inbox.methods.message().call()
    assert.equal(message, "Hello")
  })

  it("Can change the message", async () => {
    await inbox.methods.setMessage("Bye").send({from: accounts[0]})
    const message = await inbox.methods.message().call()
    assert.equal(message, "Bye")
  })

})



















