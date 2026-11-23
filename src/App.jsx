import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import ProductCard from './productcard.jsx'
import "./App.css";

function App() {

  // Four product records
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
      category: "Electronics"
    },
    {
      id: 3,
      name: "Shoes",
      price: 1500,
      category: "Fashion"
    },
    {
      id: 4,
      name: "Watch",
      price: 2500,
      category: "Accessories"
    }
  ];

  return (
    <div className="app">

      <header className="header">
        <h1>ShopEasy.</h1>
        <p>Your favourite products, all in one place.</p>
      </header>

      <section className="products-section">

        <h2>Our Products</h2>
        <p className="subtitle">
          Explore our latest collection
        </p>

        <div className="product-container">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
            />
          ))}

        </div>

      </section>

      <footer>
        © 2026 ShopEasy. All Rights Reserved.
      </footer>

    </div>
  );
}

export default App;

