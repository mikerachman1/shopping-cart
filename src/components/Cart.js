import React, { useState, useEffect } from "react";
import padPrices from "./helpers/padPrices";

const Cart = (props) => {
  const { cartItems,
          quantityItems,
          subtotalItems,
          totalItems,
          totalPrice,
          deleteFromCart,
          incrementItem,
          decrementItem } = props;
  
  return (
    <div className="cart">
      <h1>Cart</h1>
      <h3>Items in Cart: {totalItems}</h3>
      <div className="cart-contents">
        <ul>
          {cartItems.map((item, i) => (
            <li key={item.id}>
              <h4>{item.title}</h4>
              <p>Quantity : {quantityItems[i]}
                <button>+</button>
                <button>-</button>
              </p>
              <p>Price : {padPrices(item.price)}</p>
              <p>Sub-Total : {padPrices(subtotalItems[i])}</p>
              <button onClick={() => deleteFromCart(i)}>Delete From Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <h3>Order Total: {padPrices(totalPrice)}</h3>
      <button>Complete Order</button>
    </div>
  );
};

export default Cart;