import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';

function App() {
  const ficha_medica = {
    altura: "175cm",
    grupo: "O+",
    estado: "Saludable",
    alergias: "Mandarina"
  }

  //const numero = 123456;


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master en react!!!
        </p>

        {/* Mi primer componente */}
        <div className='componentes'>
          <hr/>
          <EventosComponente/>
          <hr/>
          <TercerComponente 
          nombre = "Giorgio"
          apellidos = "Oso"
          ficha = {ficha_medica}

          />
          <hr/>
          <SegundoComponente />
          <hr/>
          <MiComponente />
        </div>
        
      </header>
    </div>
  );
}

export default App;
