import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Modal from '../Modal';
import '../ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="product-card" onClick={toggleModal}>
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
        <div className="product-card-content">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <button className="buy-button" onClick={(e) => { e.stopPropagation(); addToCart(product); }}>Comprar</button>
        </div>
      </div>
      <Modal show={showModal} onClose={toggleModal} product={product} addToCart={addToCart} />
    </>
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
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;






