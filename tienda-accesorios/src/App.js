import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import NuevaColeccion from './components/NewCollection';
import PromocionesOfertas from './components/OfferAndPromo';
import AboutUs from './pages/AboutUs';
import Collections from './pages/Collections';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Moda from './pages/Moda'; // Nueva importación
import Motivacion from './pages/Motivacion'; // Nueva importación
import Mujeres from './pages/Mujeres'; // Nueva importación
import Register from './pages/Register';
import Store from './pages/Store';

const App = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [cartItems, setCartItems] = useState({}); 

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
        <Route path="/nueva-coleccion" element={<NuevaColeccion />} />  {/* Nueva ruta */}
        <Route path="/promociones-ofertas" element={<PromocionesOfertas />} />  {/* Nueva ruta */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/moda" element={<Moda />} />  {/* Nueva ruta */}
        <Route path="/motivacion" element={<Motivacion />} />  {/* Nueva ruta */}
        <Route path="/mujeres" element={<Mujeres />} />  {/* Nueva ruta */}
        <Route
          path="/cart"
          element={<Cart cartItems={Object.values(cartItems)} removeFromCart={removeFromCart} />} 
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
