
import { useState } from "react";

function ProductCard(props) {

  const [cart, setCart] = useState(0);

  // Add product to cart
  function addToCart() {
    setCart((previousCount) => previousCount + 1);
  }

  // Reset product count
  function resetCount() {
    setCart(0);
  }

  return (
    <div className="product-card">

      <span className="category">
        {props.category}
      </span>

      <h2>{props.name}</h2>

      <h3>₹{props.price.toLocaleString("en-IN")}</h3>

      <div className="cart-info">
        Items Added: <strong>{cart}</strong>
      </div>

      <button className="add-btn" onClick={addToCart}>
        + Add to Cart
      </button>

      <button className="reset-btn" onClick={resetCount}>
        Reset Count
      </button>

    </div>
  );
}

export default ProductCard;
