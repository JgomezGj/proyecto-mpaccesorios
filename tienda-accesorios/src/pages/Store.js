// Store.js

import React, { useState } from 'react';
import '../Store.css';
import collarImage from '../assets/collar.jpg';
import pulseraImage from '../assets/pulsera.jpg';
import ProductCard from '../components/ProductCard';

const Store = ({ addToCart }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Collar Elegante', price: 19.99, image: collarImage, description: 'Descripción del collar elegante...' },
    { id: 2, name: 'Pulsera Moderna', price: 9.99, image: pulseraImage, description: 'Descripción de la pulsera moderna...' },
    // Agrega más productos según sea necesario
  ]);

  return (
    <div>
      <h1 className="store-title">Tienda</h1>
      <main className="store-container">
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} /> // Asegúrate de pasar addToCart al componente ProductCard
          ))}
        </div>
      </main>
    </div>
  );
};

export default Store;



