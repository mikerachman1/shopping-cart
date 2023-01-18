import React, { useState } from "react";

const Cart = () => {
  const [cartitems, setCartItems] = useState([]);

  return (
    <div className="cart">
      <h1>Cart</h1>
      <button>Complete Order</button>
    </div>
  );
};

export default Cart;