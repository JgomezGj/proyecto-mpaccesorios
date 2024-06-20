import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import '../Header.css';

const Header = ({ onNavigate, activeLink }) => {
  const titleText = "MPACCESORIOS";
  const navItems = [
    { text: "Inicio", path: "/", destination: "Home" },
    { text: "Tienda", path: "/store", destination: "Store" },
    { text: "Colecciones", path: "/collections", destination: "Collections" },
    { text: "Nosotros", path: "/about-us", destination: "AboutUs" },
    { text: "Contacto", path: "/contact-us", destination: "ContactUs" },
  ];

  return (
    <header>
      <div className="main-header">
        <h1 className="title">
          <Link to="/" className="logo-link" onClick={() => onNavigate('Home')} aria-label="Home">
            {titleText.split('').map((letter, index) => (
              <span key={index} className={`letter letter-${index}`}>{letter}</span>
            ))}
          </Link>
        </h1>
        <nav>
          <ul className="nav-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={() => onNavigate(item.destination)}
                  aria-label={item.text}
                  className={activeLink === item.destination ? 'active' : ''}
                >
                  {item.text.split('').map((letter, idx) => (
                    <span key={idx} className={`letter letter-${idx}`}>{letter}</span>
                  ))}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-right">
          <ul className="nav-right-list">
            <li>
              <Link
                to="/register"
                onClick={() => onNavigate('Register')}
                aria-label="Registro"
                className={activeLink === 'Register' ? 'active' : ''}
              >
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                onClick={() => onNavigate('Cart')}
                aria-label="Carrito"
                className={activeLink === 'Cart' ? 'active' : ''}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  activeLink: PropTypes.string.isRequired,
};

export default Header;


