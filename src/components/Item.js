import React from "react";

const Item = (props) => {
  const details = props.details
  return (
    <div className="item-container">
      <h3>{details.title}</h3>
      <h3>{details.price}</h3>
      <p>{details.description}</p>
      <img src={details.image} alt={details.title} />
    </div>
  );
};

export default Item;