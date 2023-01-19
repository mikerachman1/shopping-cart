import React from "react";
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
          {cartItems.map((ittItem, i) => (
            <li key={ittItem.id}>
              <h4>{ittItem.item.title}</h4>
              <p>Quantity : {quantityItems[i].number}
                <button onClick={() => incrementItem(ittItem.id, i)}>+</button>
                <button onClick={() => decrementItem(ittItem.id, i)}>-</button>
              </p>
              <p>Price : {padPrices(ittItem.item.price)}</p>
              <p>Sub-Total : {padPrices(subtotalItems[i].number)}</p>
              <button onClick={() => deleteFromCart(ittItem.id, i)}>Delete From Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <h3>Order Total: ${padPrices(totalPrice)}</h3>
      {totalItems > 0 && 
        <button>Complete Order</button>
      }
    </div>
  );
};

export default Cart;