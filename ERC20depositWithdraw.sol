pragma solidity 0.4.25;

contract DW {
    int bal;
    uint deadline;
    uint today;
    address owner;


    constructor() public{
        bal =1;
        owner = msg.sender;
        today = block.timestamp;
    }

    function getBalance() view public returns(int){
        return bal;
    }

    function deposit(int amt) public {
        bal = bal +amt;
    }


    function withdraw(int amt) public {
        require(block.timestamp >= today + 3600 seconds);
        require(owner == msg.sender);
        bal = bal - amt;
    }
}
