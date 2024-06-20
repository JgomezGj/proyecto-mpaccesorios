import React from 'react';
import '../AboutUs.css';

const AboutUs = () => {
  return (
    <main className="content-container">
      <div className="text-container">
        <p className="custom-paragraph">
          En MPAccesorios, celebramos la belleza de la artesanía y la individualidad. 
          Cada uno de nuestros accesorios es cuidadosamente elaborado a mano con materiales 
          de alta calidad, asegurando piezas únicas que reflejan tu estilo y personalidad. 
          Ofrecemos una amplia gama de productos, desde pulseras y collares hasta anillos y pendientes, 
          todos ellos personalizables para que encuentres el accesorio perfecto que hable de ti.
          <span className="new-paragraph">
            Descubre la diferencia que hace llevar algo realmente especial. Cada pieza cuenta una historia, 
            hecha con amor y dedicación. Explora nuestra colección y encuentra ese toque final que hará brillar tu look.
          </span>
        </p>
      </div>
      <div className="image-container">
        <img src={require('../imgInicio.jpg')} alt="Tiara-Pendientes-Pulsera" className="custom-image" />
      </div>
    </main>
  );
};

export default AboutUs;
