import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cart from './components/Cart'; // Importar el componente Cart
import Footer from './components/Footer';
import Header from './components/Header';
import AboutUs from './pages/AboutUs';
import Collections from './pages/Collections';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Register from './pages/Register';
import Store from './pages/Store';

const App = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [cartItems, setCartItems] = useState({}); // Estado para mantener los productos en el carrito como un objeto

  const handleNavigate = (destination) => {
    setActiveLink(destination);
  };

  const addToCart = (product) => {
    const { id, name, price } = product;
    if (cartItems[id]) {
      setCartItems({
        ...cartItems,
        [id]: {
          ...cartItems[id],
          quantity: cartItems[id].quantity + 1,
        },
      });
    } else {
      setCartItems({
        ...cartItems,
        [id]: {
          id,
          name,
          price,
          quantity: 1,
        },
      });
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = { ...cartItems };
    delete updatedCart[productId];
    setCartItems(updatedCart);
  };

  return (
    <Router>
      <Header onNavigate={handleNavigate} activeLink={activeLink} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store addToCart={addToCart} />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/cart"
          element={<Cart cartItems={Object.values(cartItems)} removeFromCart={removeFromCart} />} // Pasar Object.values(cartItems) como cartItems
        />
        {/* Añadir removeFromCart al componente Cart */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
