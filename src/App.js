import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Shop from "./components/Shop";
import Nav from "./components/Nav";
import "./style.css";
import Cart from "./components/Cart";
import products from "./components/helpers/products";

function App() {
  const [cart, setCart] = useState([]);
  const [numberItems, setNumberItems] = useState(0);
  const [total, setTotal] = useState(0);

  const addToCart = (item, quantity, price) => {
    if (quantity < 1) { return }
    setCart([...cart, {itemDetails: item, quantity: quantity}]);
    setNumberItems(numberItems + quantity);
    setTotal(total + (price * quantity))
  };

  const deleteFromCart = (itemIndex, quantity, price) => {
    setCart(cart.filter(item => item !== cart[itemIndex]))
    setNumberItems(numberItems - quantity);
    setTotal(total - (price * quantity));
  };

  const incrementItem = (itemIndex, item, price) => {
    const oldQuantity = cart[itemIndex].quantity
    setCart(cart.splice(itemIndex, 1, {itemDetails: item, quantity: oldQuantity + 1}))
    setNumberItems(numberItems + 1);
    setTotal(total + price)
    console.log(cart)
  };

  const decrementItem = (itemIndex, item, price) => {
    const oldQuantity = cart[itemIndex].quantity
    setCart(cart.splice(itemIndex, 1, {itemDetails: item, quantity: oldQuantity - 1}))
    setNumberItems(numberItems - 1);
    setTotal(total - price)
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
                                        numberItems={numberItems}
                                        total={total}
                                        />} />
          <Route path="/cart" element={<Cart 
                                        cart={cart}
                                        numberItems={numberItems}
                                        total={total}
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
