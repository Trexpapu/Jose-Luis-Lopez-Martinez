import React, { useState } from 'react';
import './App.css';
import Photo from './Photo';
import Education from './Education';
import Services from './Services';

function App() {
  const [showEducation, setShowEducation] = useState(false);
  const [showServices, setshowServices] = useState(false);

  const handleClick = () => {
    console.log('Hiciste clic en Sobre mí');
    setShowEducation(!showEducation);
  };
  const handleClick2 = () => {
    console.log('Hiciste clic en Sobre mí');
    setshowServices(!showServices);
  }

  return (
    <div className="App">
      <header className="App-header">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"></link>
        <p className="name">Abogado José<br /> Luis López<br /> Martínez.</p>
        <div className="oval">
          <div className="graduate_label">Licenciado en derecho</div>
        </div>
        <Photo />
        <p className='personal_information' onClick={handleClick}>Sobre mí</p>
        {showEducation && <Education show={showEducation} />}
        <p className='Services_information' onClick={handleClick2}>Servicios</p>
        {showServices && <Services show={showServices} />}

        <div className='Reach_me'>Contáctame</div>
      </header>
    </div>
  );
}

export default App;
