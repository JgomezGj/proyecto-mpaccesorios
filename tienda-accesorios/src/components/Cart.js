import PropTypes from 'prop-types';
import React from 'react';
import '../Cart.css'; // Importa el archivo CSS creado para el estilo del carrito

const Cart = ({ cartItems, removeFromCart }) => {
  const calculateTotal = () => {
    return Object.values(cartItems).reduce((acc, { price, quantity }) => acc + price * quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    // Redirige a la URL de PayU LATAM sandbox
    window.location.href = 'https://sandbox.api.payulatam.com/payments-api/4.0/service.cgi';
  };

  return (
    <div className="cart-container">
      <h1 className="store-title">Carrito de Compras</h1>
      {Object.keys(cartItems).length === 0 ? (
        <p className="empty-cart-message">No hay productos en el carrito.</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {Object.values(cartItems).map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">${item.price.toFixed(2)}</span>
                  <span className="item-quantity">Cantidad: {item.quantity}</span>
                </div>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="cart-total">
              <strong>Total:</strong> ${calculateTotal()}
            </div>
            <button className="checkout-button" onClick={handleCheckout}>Pagar</button>
          </div>
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;





