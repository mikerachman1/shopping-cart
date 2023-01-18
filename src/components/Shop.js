import React from "react";
import Item from "./Item";

const Shop = (props) => {
  const {products} = props;

  return (
    <div className="shop">
      <div className="sticky-cart">
        <h3>Items in Cart: 0</h3>
        <h3>Total: $0</h3>
      </div>
      <h1>Shop</h1>
      <div className="items">
        {products.map(item => <Item key={item.id} details={item} />)}
      </div>
    </div>
  );
};

export default Shop;