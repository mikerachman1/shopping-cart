import React, { useState } from "react";
import padPrices from "./helpers/padPrices";

const Item = (props) => {
  const [quantity, setQuantity] = useState(1)

  const { details, addToCart } = props;
  
  return (
    <div className="item-container">
      <h3>{details.title}</h3>
      <h3>${padPrices(details.price)}</h3>
      <p>{details.description}</p>
      <img src={details.image} alt={details.title} />
      <label htmlFor="quantity">
        Quantity: 
        <input 
          type="number"
          min="1"
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>
      <button onClick={() => addToCart(details, parseInt(quantity), details.price)}>
        Add To Cart
      </button>
    </div>
  );
};

export default Item;