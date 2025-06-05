import React from 'react';

const Libro = ({ titulo, autor, imagen, descripcion }) => {
  return (
    <div className="contenido_bloque">
      <h2>{titulo}</h2>
      <h5>{autor}</h5>
      <img src={imagen} alt={`Portada de ${titulo}`} width="100" height="130" />
      <p>{descripcion}</p>
    </div>
  );
};

export default Libro;
