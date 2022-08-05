await contract.balanceOf(token2,player).then(x=>x.toNumber())
await contract.balanceOf(token1,player).then(x=>x.toNumber())

await s(token2,token1,90)

contract.swap(token1,token2,10)
contract.swap(token2,token1,x)
