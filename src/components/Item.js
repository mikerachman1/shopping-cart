import React from "react";

const Item = (props) => {
  const details = props.details
  return (
    <div className="item-container">
      <h3>{details.title}</h3>
      <h3>${details.price}</h3>
      <p>{details.description}</p>
      <img src={details.image} alt={details.title} />
      <label htmlFor="quantity">
        Quantity: 
        <input 
          type="number"
          id="quantity"
          name="quantity"
        />
      </label>
      <button>Add To Cart</button>
    </div>
  );
};

export default Item;