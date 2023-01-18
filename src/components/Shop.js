import React from "react";
import Item from "./Item";
import padPrices from "./helpers/padPrices";
import { Link } from "react-router-dom";

const Shop = (props) => {
  const { products, addToCart, numberItems, total } = props;

  return (
    <div className="shop">
      <div className="sticky-cart">
        <h3>Items in <Link 
                      className="shop-cart-link" 
                      to="/cart"
                      >
                      Cart
                      </Link>: {numberItems}</h3>
        <h3>Total: ${padPrices(total)}</h3>
      </div>
      <h1>Shop</h1>
      <div className="items">
        {products.map(item => <Item key={item.id} 
                                    details={item}
                                    addToCart={addToCart}                                     
                                    />)}
      </div>
    </div>
  );
};

export default Shop;