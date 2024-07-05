import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Collections.css'; // Asegúrate de importar el archivo CSS

const collectionsData = [
  { title: 'Nueva Colección', description: 'Descubre nuestra nueva colección de accesorios.', image: 'path/to/nueva-coleccion.jpg', link: '/nueva-coleccion' },
  { title: 'Promociones y ofertas', description: 'Aprovecha nuestras promociones y ofertas especiales.', image: 'path/to/promociones-ofertas.jpg', link: '/promociones-ofertas' },
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
