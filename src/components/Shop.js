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
      <h1>Shop</h1>
      <div className="items">
        {items.map(item => <Item key={item.id} details={item} />)}
      </div>
    </div>
  );
};

export default Shop;