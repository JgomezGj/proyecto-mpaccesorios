import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <h1 className="store-title">Contacto</h1>
      <form>
        <label>Nombre:</label>
        <input type="text" name="name" />
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Mensaje:</label>
        <textarea name="message"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;
