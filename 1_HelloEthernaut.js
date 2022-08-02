/*

This task is a simple task for onboarding purposes

Start off by setting up Metamask, then open console in browser to interact


*/

await contract.info();

await contract.info1();

await contract.info2("hello");

let b = await contract.infoNum();
b.toNumber();

await contract.info42();

await contract.theMethodName();

await contract.method7123949();

await contract.password();

contract.authenticate('ethernaut0');
// Then sign the transaction

await contract.getCleared();
// Just a check

