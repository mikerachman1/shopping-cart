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
    setCart([...cart, {itemDetails: item, quantity: quantity}]);
    setNumberItems(numberItems + quantity);
    setTotal(total + (price * quantity))
  };

  const deleteFromCart = (itemIndex, quantity, price) => {
    setCart(cart.filter(item => item !== cart[itemIndex]))
    setNumberItems(numberItems - quantity);
    setTotal(total - (price * quantity));
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
                                        />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
