import React, { useState } from 'react';
import '../Register.css'; // Asegúrate de importar el archivo CSS

const Register = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para el registro
  };

  return (
    <div className="register-container">
      <h1 className="store-title">Registro</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <label className="register-label">Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="register-input"
        />
        <label className="register-label">Contraseña:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="register-input"
        />
        <button type="submit" className="register-button">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;

