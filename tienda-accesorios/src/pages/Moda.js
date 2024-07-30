import React from 'react';
import moda1 from '../assets/moda1.jpg';
import moda2 from '../assets/moda2.jpg';
import moda3 from '../assets/moda3.jpg';
import moda4 from '../assets/moda4.jpg';
import '../Moda.css';

const Moda = () => {
  return (
    <div className="moda-container">
      <h1 className="store-title">Moda</h1>
      <p className="intro-paragraph">
        Descubre el poder transformador de cada accesorio, diseñado para realzar
        tu belleza y reflejar tu estilo único. Desde eventos elegantes hasta 
        salidas casuales, nuestros accesorios se adaptan a cualquier ocasión y temporada.
        Mantente siempre a la vanguardia de la moda y luce espléndida en todo momento.
      </p>
      <p className="trend-paragraph">
        Hoy te presentamos las tendencias más actuales en accesorios que están causando furor:
      </p>
      <div className="gallery">
        <div className="gallery-item">
          <img src={moda1} alt="Moda 1" className="gallery-image" />
          <div className="image-overlay">
            <p className="image-description">Accesorios Elegantes</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={moda2} alt="Moda 2" className="gallery-image" />
          <div className="image-overlay">
            <p className="image-description">Tendencias Modernas</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={moda3} alt="Moda 3" className="gallery-image" />
          <div className="image-overlay">
            <p className="image-description">Estilo Casual</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={moda4} alt="Moda 4" className="gallery-image" />
          <div className="image-overlay">
            <p className="image-description">Accesorios de Temporada</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moda;
