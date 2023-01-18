import React from "react";
import Item from "./Item";
import padPrices from "./helpers/padPrices";

const Shop = (props) => {
  const { products, addToCart, numberItems, total } = props;

  return (
    <div className="shop">
      <div className="sticky-cart">
        <h3>Items in Cart: {numberItems}</h3>
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