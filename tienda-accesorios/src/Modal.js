import PropTypes from 'prop-types';
import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, product, addToCart }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} className="modal-image" />
        <p>{product.description}</p>
        <p className="modal-price">${product.price.toFixed(2)}</p>
        <button className="buy-button" onClick={() => { addToCart(product); onClose(); }}>Comprar</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Modal;

