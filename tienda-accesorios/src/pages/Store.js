import React, { useState } from 'react';
import '../Store.css';
import collarImage from '../assets/collar.jpg';
import pulseraImage from '../assets/pulsera.jpg';
import ProductCard from '../components/ProductCard';

const Store = ({ addToCart }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Collar Elegante', price: 19.99, image: collarImage, description: 'Descripción del collar elegante...' },
    { id: 2, name: 'Pulsera Moderna', price: 9.99, image: pulseraImage, description: 'Descripción de la pulsera moderna...' },
    { id: 3, name: 'Collar Elegante 2', price: 19.99, image: collarImage, description: 'Descripción del collar elegante...' },
    { id: 4, name: 'Pulsera Moderna 2', price: 9.99, image: pulseraImage, description: 'Descripción de la pulsera moderna...' },
    { id: 5, name: 'Collar Elegante 3', price: 19.99, image: collarImage, description: 'Descripción del collar elegante...' },
    { id: 6, name: 'Pulsera Moderna 3', price: 9.99, image: pulseraImage, description: 'Descripción de la pulsera moderna...' },
    { id: 7, name: 'Collar Elegante 4', price: 19.99, image: collarImage, description: 'Descripción del collar elegante...' },
    { id: 8, name: 'Pulsera Moderna 4', price: 9.99, image: pulseraImage, description: 'Descripción de la pulsera moderna...' },
    { id: 1, name: 'Collar Elegante', price: 19.99, image: collarImage, description: 'Descripción del collar elegante...' },
    { id: 2, name: 'Pulsera Moderna', price: 9.99, image: pulseraImage, description: 'Descripción de la pulsera moderna...' },
    { id: 3, name: 'Collar Elegante 2', price: 19.99, image: collarImage, description: 'Descripción del collar elegante...' },
    { id: 4, name: 'Pulsera Moderna 2', price: 9.99, image: pulseraImage, description: 'Descripción de la pulsera moderna...' },
    { id: 5, name: 'Collar Elegante 3', price: 19.99, image: collarImage, description: 'Descripción del collar elegante...' },
    { id: 6, name: 'Pulsera Moderna 3', price: 9.99, image: pulseraImage, description: 'Descripción de la pulsera moderna...' },
    { id: 7, name: 'Collar Elegante 4', price: 19.99, image: collarImage, description: 'Descripción del collar elegante...' },
    { id: 8, name: 'Pulsera Moderna 4', price: 9.99, image: pulseraImage, description: 'Descripción de la pulsera moderna...' },
    // Agrega más productos según sea necesario
  ]);

  return (
    <div>
      <h1 className="store-title">Tienda</h1>
      <main className="store-container">
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Store;




