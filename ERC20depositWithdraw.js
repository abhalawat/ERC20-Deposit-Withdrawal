const DW = artifacts.require('DW');
const { time,constants } = require("@openzeppelin/test-helpers");

//const {ZERO_ADDRESS} = constants;

let bal = 1;

contract('DW',function(accounts) {

	beforeEach(function() 
	{
            let owner = accounts[0];
            let user = accounts[1];
   	});
	
	it("Should deposit ammount",async () => 
	{
	    const dw = await DW.deployed();
	    const deposit = 20;
	    const receipt = await dw.deposit(deposit);
	    const balance = await dw.getBalance();
	    bal = bal+deposit
	    assert.equal(balance,bal);
	});
	
	it("Should Withdraw ammount after 1 hr",async () => 
	{
	    const dw = await DW.deployed();
	    let duration = time.duration.seconds(3600);
	    await time.increase(duration);
	    const withdraw = 3;
	    const receipt = await dw.withdraw(withdraw);
	    const balance = await dw.getBalance();
	    bal = bal-withdraw
	    await assert.equal(balance,bal);
	});
	
	it("Should get balance",async () => 
	{
	    const dw = await DW.deployed();
	    const balance = await dw.getBalance();
	    assert.equal(balance,bal);
	});
	
	it("Should get address",async () => 
	{
	    const dw = await DW.deployed();
	    let owner = await dw.getAddress();
	    let ownerr = accounts[0];
	    assert.equal(ownerr,owner);
	});
})
