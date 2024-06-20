import PropTypes from 'prop-types';
import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container">
      <h3>Carrito de Compras</h3>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default Cart;
