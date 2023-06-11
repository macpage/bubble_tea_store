import cart from '/assets/cart.png';
function Navbar() {
  return (
    <nav style={{ height: '5vh' }}>
      <h1>Home</h1>
      <h1>About</h1>
      <button id="cart_button">
        <img src={cart} alt="cart" />
      </button>
    </nav>
  );
}

export default Navbar;
