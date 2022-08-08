/*

This example illustrates nothing on the blockchain is private, everything including the data parameters declared as private in the code are easily accessible to the public

This is a very important aspect of blockchain and hence care must be taken when storing secret parameters like passwords on the blockchain

Here the private variable password is declared after the first variable bool (locked) and hence occupies the second slot on the storage, using this information we can access the data at this slot and get the required private variable password to unlock the vault 

*/

// Using web3 lib function getStorageAt we can get the storage data at any given slot
let psswd = await web3.eth.getStorageAt(contract.address,1);

// Use this psswd to unlock the vault
contract.unlock(psswd);
