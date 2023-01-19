import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Shop from "./components/Shop";
import Nav from "./components/Nav";
import "./style.css";
import Cart from "./components/Cart";
import products from "./components/helpers/products";

let nextId = 0;

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [quantityItems, setQuantityItems] = useState([]);
  const [subtotalItems, setSubtotalItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (itemToAdd, quantity) => {
    if (quantity < 1) { return }
    //if item is already in cart update quantityItems with corresponding index
    let itemsArray = [];
    let idArray = [];
    cartItems.forEach((item) => {
      itemsArray.push(item.item);
      idArray.push(item.id);
    })

    if (itemsArray.includes(itemToAdd)) {
      const idIndex = itemsArray.indexOf(itemToAdd);
      const itemId = idArray[idIndex];
      setQuantityItems(quantityItems.map((quan) => {
        if (quan.id === itemId) {
          return { id: quan.id, number: quan.number + quantity }
        } else {
          return quan
        }
      }));
      setSubtotalItems(subtotalItems.map((sub) => {
        if (sub.id === itemId) {
          return { id: sub.id, number: sub.number + (itemToAdd.price * quantity) }
        } else {
          return sub
        }
      }))
    } else {
      nextId += 1;
      setCartItems([...cartItems, { id: nextId, item: itemToAdd }]);
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
    const itemPrice = cartItems[itemIndex].item.price;
    // find value in array and update just that value (quant, sub)
    setQuantityItems(quantityItems.map((quan) => {
      if (quan.id === itemId) {
        return { id: quan.id, number: quan.number + 1 };
      } else {
        return quan;
      }
    }));
    setSubtotalItems(subtotalItems.map((sub) => {
      if (sub.id === itemId) {
        return { id: sub.id, number: sub.number + itemPrice }
      } else {
        return sub;
      }
    }));
    // update totalitems and totalprice with new quantity
    setTotalItems(totalItems + 1);
    setTotalPrice(totalPrice + itemPrice);
  };

  const decrementItem = (itemId, itemIndex) => {
    if (quantityItems[itemIndex].number <= 1) { return };
    const itemPrice = cartItems[itemIndex].item.price;
    // find value in array and update just that value (quant, sub)
    setQuantityItems(quantityItems.map((quan) => {
      if (quan.id === itemId) {
        return { id: quan.id, number: quan.number - 1 };
      } else {
        return quan;
      }
    }));
    setSubtotalItems(subtotalItems.map((sub) => {
      if (sub.id === itemId) {
        return { id: sub.id, number: sub.number - itemPrice }
      } else {
        return sub;
      }
    }));
    // update totalitems and totalprice with new quantity
    setTotalItems(totalItems - 1);
    setTotalPrice(totalPrice - itemPrice);
  };


  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<About />} />
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
