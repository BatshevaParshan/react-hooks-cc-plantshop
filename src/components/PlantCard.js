import React, { useState } from "react";

function PlantCard({ image="https://via.placeholder.com/400", name, price }) {

const [isInStock, setIsInStock] = useState(true)

const toggleInStock = () => setIsInStock(!isInStock)
  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock? (
        <button onClick={toggleInStock} className="primary">In Stock</button>
      ) : (
        <button onClick={toggleInStock} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
