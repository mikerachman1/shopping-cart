import React, { useState } from "react";
import padPrices from "./helpers/padPrices";

const Item = (props) => {
  const [quantity, setQuantity] = useState(1)

  const { details, addToCart } = props;
  
  return (
    <div className="item-container">
      <img className="item-image" src={details.image} alt={details.title} />
      <div className="item-info">
        <h3 className="item-title">{details.title}</h3>
        <h3 className="item-price">${padPrices(details.price)}</h3>
        <p className="item-description">{details.description}</p>
        <div className="item-form">
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
          <button onClick={() => addToCart(details, parseInt(quantity))}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;