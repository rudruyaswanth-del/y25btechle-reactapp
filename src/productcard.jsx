
import { useState } from "react";
import React from "react";

function ProductCard(props) {

  const [cart, setCart] = useState(0);

  function addToCart() {
    setCart(cart + 1);
  }

  return (
    <div>
      <h2>{props.name}</h2>
      <p>Price: Rs. {props.price}</p>
      <p>Category: {props.category}</p>

      <button onClick={addToCart}>
        Add to Cart
      </button>

      <p>Items Added: {cart}</p>
    </div>
  );
}

export default ProductCard;
