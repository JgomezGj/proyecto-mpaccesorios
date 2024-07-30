import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Collections.css'; // Asegúrate de importar el archivo CSS
import saleImage from "../assets/SALE.jpg";
import newImage from "../assets/new-collection.jpg";


const collectionsData = [
  { title: 'Nueva Colección', description: 'Descubre nuestra nueva colección de accesorios.', image: newImage, link: '/nueva-coleccion' },
  { title: 'Promociones y ofertas', description: 'Aprovecha nuestras promociones y ofertas especiales.', image: saleImage, link: '/promociones-ofertas' },
];

const Collections = () => {
  const navigate = useNavigate();

  const handleCollectionClick = (link) => {
    navigate(link);
  };

  return (
    <div>
      <h1 className="store-title">Colecciones</h1>
      <p>Explora nuestras colecciones temáticas de accesorios.</p>
      <div className="collections-grid">
        {collectionsData.map((collection, index) => (
          <div key={index} className="collection-item" onClick={() => handleCollectionClick(collection.link)}>
            <img src={collection.image} alt={collection.title} className="collection-image" />
            <h2>{collection.title}</h2>
            <p>{collection.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
