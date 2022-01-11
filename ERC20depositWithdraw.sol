pragma solidity 0.8.11;

contract DW {
    
    int bal;
    uint deadline;
    uint today;
    address owner;

    constructor() public
    {
        bal = 1;
        owner = msg.sender;
        today = block.timestamp;
    }
    
    function getAddress() view public returns(address)
    {
        return msg.sender;
    }
    
    function getBalance() view public returns(int)
    {
        return bal;
    }

    function deposit(int amt) public 
    {
        bal = bal +amt;
    }

    function withdraw(int amt) public 
    {
        require(block.timestamp >= today + 3600 seconds);
        require(msg.sender==owner);
        bal = bal - amt;
    }
}
