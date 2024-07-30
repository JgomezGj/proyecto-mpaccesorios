import React from 'react';
import "../Contact.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1 className="store-title">Contacto</h1>
      <div className="social-links">
        <a href="https://www.instagram.com/mpjaraccesorios" target="_blank" rel="noopener noreferrer" className="social-button instagram-button">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://wa.me/3013389895" target="_blank" rel="noopener noreferrer" className="social-button whatsapp-button">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
      <form className="contact-form">
        <label className="contact-label">Nombre:</label>
        <input type="text" name="name" className="contact-input" />
        <label className="contact-label">Email:</label>
        <input type="email" name="email" className="contact-input" />
        <label className="contact-label">Mensaje:</label>
        <textarea name="message" className="contact-textarea"></textarea>
        <button type="submit" className="contact-button">Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;



