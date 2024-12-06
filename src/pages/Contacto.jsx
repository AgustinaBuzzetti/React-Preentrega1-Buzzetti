import React, { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar una lógica para enviar el mensaje, por ahora solo mostramos el mensaje
    setSuccessMessage('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contacto-container">
      <h1>Contacto</h1>
      <p>Por favor, rellena el formulario para ponerte en contacto con nosotros.</p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default Contacto;
