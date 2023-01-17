import React, { useEffect, useState } from "react";
import Item from "./Item";

const Shop = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fakestoreapi.com/products?limit=10');
    const itemsArray = await data.json();
    console.log(itemsArray);
    setItems(itemsArray);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="shop">
      <div className="sticky-cart">
        <h3>Items in Cart: 0</h3>
        <h3>Total: $0</h3>
      </div>
      <h1>Shop</h1>
      <div className="items">
        {items.map(item => <Item key={item.id} details={item} />)}
      </div>
    </div>
  );
};

export default Shop;