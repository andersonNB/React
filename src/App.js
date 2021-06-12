import logo from './assets/image/logo.svg';
import './assets/css/App.css';

function imprimirPresentacion(nombre,edad){

  var presentacion = 
  <div>
    <h2>Soy un {nombre}</h2>
    <h3>Tengo una edad de {edad} años</h3>
  </div>
  
  return presentacion
}


function App() {

  var nombre = "Ejemplo"
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Web page
        </p>
        {imprimirPresentacion(nombre,24)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
