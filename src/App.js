import logo from './assets/image/logo.svg';
import './assets/css/App.css';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Header from './components/Header';
import Router  from './Router';

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
      <section>
        <Router></Router>
      
      </section>
    </div>
  );
}

export default App;
