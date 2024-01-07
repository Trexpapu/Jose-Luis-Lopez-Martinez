import React from 'react';
import foto from './foto.jpg';
import './Photo.css'; // Importa tu archivo de estilos CSS para Photo
const Photo = () => {
  return (
    <img src={foto} className="Lawyer_Photo" alt='foto' />
  );
};

export default Photo;