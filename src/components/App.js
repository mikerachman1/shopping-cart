import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Shop from "./Shop";
import Nav from "./Nav";
import "./styles/style.css";
import Cart from "./Cart";
import products from "./helpers/products";

let nextId = 0;

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [quantityItems, setQuantityItems] = useState([]);
  const [subtotalItems, setSubtotalItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const itemInCart = (itemToAdd) => {
    const cartItemsArray = cartItems.map(item => item.details);
    return cartItemsArray.includes(itemToAdd);
  };

  const getCartItemId = (itemToAdd) => {
    const cartItemsArray = cartItems.map(item => item.details);
    const cartIdArray = cartItems.map(item => item.id);
    return cartIdArray[cartItemsArray.indexOf(itemToAdd)];
  };

  const addToCart = (itemToAdd, quantity) => {
    if (quantity < 1) { return }
    if (itemInCart(itemToAdd)) {
      // itemToAdd is already in cart
      const cartItemId = getCartItemId(itemToAdd);
      setQuantityItems(quantityItems.map((quan) => {
        return (quan.id === cartItemId ? { id: quan.id, number: quan.number + quantity } : quan)
      }));
      setSubtotalItems(subtotalItems.map((sub) => {
        return (sub.id === cartItemId ? { id: sub.id, number: sub.number + (itemToAdd.price * quantity) } : sub)
      }));
    } else {
      // itemToAdd is not already in cart
      nextId += 1;
      setCartItems([...cartItems, { id: nextId, details: itemToAdd }]);
      setQuantityItems([...quantityItems, { id: nextId, number: quantity }]);
      setSubtotalItems([...subtotalItems, { id: nextId, number: (itemToAdd.price * quantity) }]);  
    }
    setTotalItems(totalItems + quantity);
    setTotalPrice(totalPrice + (itemToAdd.price * quantity));
  };

  const deleteFromCart = (itemId, itemIndex) => {
    const quantityToSubtract = quantityItems[itemIndex].number;
    const subtotalToSubtract = subtotalItems[itemIndex].number;
    setCartItems(cartItems.filter(item => item.id !== itemId));
    setQuantityItems(quantityItems.filter(quantity => quantity.id !== itemId));
    setSubtotalItems(subtotalItems.filter(subtotal => subtotal.id !== itemId));
    setTotalItems(totalItems - quantityToSubtract);
    setTotalPrice(totalPrice - subtotalToSubtract);
  };

  const incrementItem = (itemId, itemIndex) => {
    const itemPrice = cartItems[itemIndex].details.price;
    setQuantityItems(quantityItems.map((quan) => {
      return (quan.id === itemId ? { id: quan.id, number: quan.number + 1 } : quan)
    }));
    setSubtotalItems(subtotalItems.map((sub) => {
      return (sub.id === itemId ? { id: sub.id, number: sub.number + itemPrice } : sub)
    }));
    setTotalItems(totalItems + 1);
    setTotalPrice(totalPrice + itemPrice);
  };

  const decrementItem = (itemId, itemIndex) => {
    if (quantityItems[itemIndex].number <= 1) { return };
    const itemPrice = cartItems[itemIndex].details.price;
    setQuantityItems(quantityItems.map((quan) => {
      return (quan.id === itemId ? { id: quan.id, number: quan.number - 1 } : quan)
    }));
    setSubtotalItems(subtotalItems.map((sub) => {
      return (sub.id === itemId ? { id: sub.id, number: sub.number - itemPrice } : sub)
    }));
    setTotalItems(totalItems - 1);
    setTotalPrice(totalPrice - itemPrice);
  };


  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop 
                                        products={products}
                                        addToCart={addToCart}
                                        totalItems={totalItems}
                                        totalPrice={totalPrice}
                                        />} />
          <Route path="/cart" element={<Cart 
                                        cartItems={cartItems}
                                        quantityItems={quantityItems}
                                        subtotalItems={subtotalItems}
                                        totalItems={totalItems}
                                        totalPrice={totalPrice}
                                        deleteFromCart={deleteFromCart}
                                        incrementItem={incrementItem}
                                        decrementItem={decrementItem}
                                        />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
