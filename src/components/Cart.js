import React from "react";

const Cart = (props) => {
  const {cart} = props;
  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="cart-contents">

      </div>
      <button>Complete Order</button>
    </div>
  );
};

export default Cart;