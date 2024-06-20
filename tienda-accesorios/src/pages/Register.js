import React, { useState } from 'react';

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
    <div>
      <h1 className="store-title">Registro</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} />
        <label>Contraseña:</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
