import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Shop from "./components/Shop";
import Nav from "./components/Nav";
import "./style.css";
import Cart from "./components/Cart";
import products from "./components/helpers/products";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [quantityItems, setQuantityItems] = useState([]);
  const [subtotalItems, setSubtotalItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item, quantity) => {
    if (quantity < 1) { return }
    //if item is already in cart update quantityItems with corresponding index
    if (cartItems.includes(item)) {
      const itemIndex = cartItems.indexOf(item);
      setQuantityItems(quantityItems.map((quan, i) => {
        if (i === itemIndex) {
          return quan + quantity
        } else {
          return quan
        }
      }));
      setSubtotalItems(subtotalItems.map((sub, i) => {
        if (i === itemIndex) {
          return sub + (item.price * quantity)
        } else {
          return sub
        }
      }))
    } else {
      setCartItems([...cartItems, item]);
      setQuantityItems([...quantityItems, quantity]);
      setSubtotalItems([...subtotalItems, (item.price * quantity)]);  
    }
    setTotalItems(totalItems + quantity);
    setTotalPrice(totalPrice + (item.price * quantity));
  };

  const deleteFromCart = (itemIndex) => {
    const quantityToSubtract = quantityItems[itemIndex];
    const subtotalToSubtract = subtotalItems[itemIndex]
    setCartItems(cartItems.filter(item => item !== cartItems[itemIndex]));
    setQuantityItems(quantityItems.filter(quantity => quantity !== quantityItems[itemIndex]));
    setSubtotalItems(subtotalItems.filter(subtotal => subtotal !== subtotalItems[itemIndex]));
    setTotalItems(totalItems - quantityToSubtract);
    setTotalPrice(totalPrice - subtotalToSubtract);
  };

  const incrementItem = (itemIndex) => {
    const itemPrice = cartItems[itemIndex].price;
    // find value in array and update just that value (quant, sub)
    const nextQuantity = quantityItems.map((quan, i) => {
      if (i === itemIndex) {
        return quan + 1;
      } else {
        return quan;
      }
    })
    setQuantityItems(nextQuantity);
    
    const nextSubtotal = subtotalItems.map((sub, i) => {
      if (i === itemIndex) {
        return sub + itemPrice;
      } else {
        return sub;
      }
    })
    setSubtotalItems(nextSubtotal);
    // update totalitems and totalprice with new quantity
    setTotalItems(totalItems + 1);
    setTotalPrice(totalPrice + itemPrice);
  };

  const decrementItem = (itemIndex) => {
    if (quantityItems[itemIndex] === 1) { return };
    const itemPrice = cartItems[itemIndex].price;

    // find value in array and update just that value (quant, sub)
    const nextQuantity = quantityItems.map((quan, i) => {
      if (i === itemIndex) {
        return quan - 1;
      } else {
        return quan;
      }
    })
    setQuantityItems(nextQuantity);
    
    const nextSubtotal = subtotalItems.map((sub, i) => {
      if (i === itemIndex) {
        return sub - itemPrice;
      } else {
        return sub;
      }
    })
    setSubtotalItems(nextSubtotal);
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
