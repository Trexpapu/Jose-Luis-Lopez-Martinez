// Education.js

import React from 'react';
import './Services.css'

const Services = ({ show }) => {
  return (
    <div className={`Services ${show ? 'show' : ''}`}>
      <h2>Consulta penal</h2>
      <ul>
        <li>Informacion...</li>
      </ul>
      <h2>Consulta penal</h2>
      <ul>
        <li>Informacion...</li>
      </ul>
    </div>
  );
};

export default Services;
