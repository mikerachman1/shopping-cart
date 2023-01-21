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
      <div className="cart-container">
        <h1>Cart</h1>
        <h3>Items in Cart: {totalItems}</h3>
        <div className="cart-contents">
          <ul>
            {cartItems.map((ittItem, i) => (
              <li key={ittItem.id}>
                <h4>{ittItem.details.title}</h4>
                <p>Quantity : {quantityItems[i].number}</p>
                <div>
                  <button name='More' onClick={() => incrementItem(ittItem.id, i)}>More</button>
                  <button name='Less' onClick={() => decrementItem(ittItem.id, i)}>Less</button>
                </div>
                <p>Price : {padPrices(ittItem.details.price)}</p>
                <p>Sub-Total : {padPrices(subtotalItems[i].number)}</p>
                <button name='Delete' onClick={() => deleteFromCart(ittItem.id, i)}>Delete From Cart</button>
              </li>
            ))}
          </ul>
        </div>
        <h3>Order Total: ${padPrices(totalPrice)}</h3>
        {totalItems > 0 &&
          <button>Complete Order</button>
        }
      </div>
    </div>
  );
};

export default Cart;