import './App.css';
import Photo from './Photo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"></link>
        <p className="name">Abogado José<br /> Luis López<br /> Martínez.</p>
        <div className="oval"></div>
        <div className="graduate_label">Licenciado en derecho</div>
        <Photo />
        
        
      </header>
    </div>
  );
}

export default App;
