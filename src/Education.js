// Education.js

import React from 'react';
import './Education.css';

const Education = ({ show }) => {
  return (
    <div className={`Education ${show ? 'show' : ''}`}>
      <h2>Educación</h2>
      <ul>
        <li>Universidad...</li>
      </ul>
      <h2>Experiencia laboral</h2>
      <ul>
        <li>Trabajos...</li>
      </ul>
    </div>
  );
};

export default Education;
