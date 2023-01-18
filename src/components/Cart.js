import React, { useState, useEffect } from "react";
import padPrices from "./helpers/padPrices";

const Cart = (props) => {
  const { cart, numberItems, total } = props;
  // const [collapsedCart, setCollapsedCart] = useState(cart);

  // useEffect on mount to collapse duplicate items in cart
  // useEffect(() => {
  //   const newCart = collapsedCart.map((item) => {
      
  //   });
  //   setCollapsedCart(newCart)
  // }, []);

  return (
    <div className="cart">
      <h1>Cart</h1>
      <h3>Items in Cart: {numberItems}</h3>
      <div className="cart-contents">
        <ul>
          {cart.map(item => (
            <li key={item.itemDetails.id}>
              <h4>{item.itemDetails.title}</h4>
              <p>Quantity : {item.quantity}</p>
              <p>Price : {padPrices(item.itemDetails.price)}</p>
              <p>Sub-Total : {padPrices(item.quantity * item.itemDetails.price)}</p>
            </li>
          ))}
        </ul>
      </div>
      <h3>Order Total: {padPrices(total)}</h3>
      <button>Complete Order</button>
    </div>
  );
};

export default Cart;