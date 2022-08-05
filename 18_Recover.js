/*

In this example it is required to find the address of the lost contract that was created via the Recovery contract

In the console, we are provided with the instance of Recovery contract, we can use this address to determine the address of the lost SimpleToken contract in two ways:
1. Copy paste the address of recovery contract (contract.address in console) in the rinkeby etherscan page (https://rinkeby.etherscan.io/), and look at the previous contract creation transaction
2. Whenever a contract is deployed through another contract, the address of the newly created contract is determinable; which can be obtained by the formula => keccack256(address, nonce), where address is the base contract address and nonce is the transaction count of the base contract

After we obtain the address we can simply destroy the contract and send the funds to any desirable address (function provided by the SimpleToken contract

*/

// === Solidity Code
// Deployed and Tested using Remix
// Deploy the Embezzle contract and run the destroy function

/*

contract Embezzle {
  // addr here can be obtained through rinkeby directly or can be computed using keccack256(address, nonce)
  
  address payable a = payable(addr);
  SimpleToken s = SimpleToken(a);

  function destroy() public {
    s.destroy(payable(msg.sender));
  }
}
