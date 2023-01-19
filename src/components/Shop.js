import React from "react";
import Item from "./Item";
import padPrices from "./helpers/padPrices";
import { Link } from "react-router-dom";

const Shop = (props) => {
  const { products, addToCart, totalItems, totalPrice } = props;

  return (
    <div className="shop">
      <div className="sticky-cart">
        <h3>Items in <Link 
                      className="shop-cart-link" 
                      to="/cart"
                      >
                      Cart
                      </Link>  : {totalItems}</h3>
        <h3>Total: ${padPrices(totalPrice)}</h3>
      </div>
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