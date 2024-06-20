import PropTypes from 'prop-types';
import React, { useState } from 'react';
import '../ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleAddToCart = (event) => {
    event.stopPropagation(); // Detiene la propagación del evento para evitar la expansión/contracción del producto
    addToCart(product); // Llama a la función addToCart pasada por props
  };

  return (
    <div className={`product-card ${expanded ? 'expanded' : ''}`} onClick={toggleExpand}>
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className={`product-image ${expanded ? 'expanded-image' : ''}`} />
      </div>
      <div className="product-card-content">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">${product.price.toFixed(2)}</p>
        {!expanded && (
          <button className="buy-button" onClick={handleAddToCart}>Comprar</button>
        )}
        {expanded && (
          <div className="expanded-content">
            <p>{product.description}</p>
            <button className="buy-button" onClick={handleAddToCart}>Comprar</button>
          </div>
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired, // Asegúrate de que addToCart sea requerido como función
};

export default ProductCard;




