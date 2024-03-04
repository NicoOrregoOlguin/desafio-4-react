import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MiApi from './MiApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [mostrarIndicadores, setMostrarIndicadores] = useState(false);

  const toggleIndicadores = () => {
    setMostrarIndicadores(!mostrarIndicadores);
  };

  return (
    <Router>
      <div className="container mt-5">
        <div className="row mb-4">
          <div className="col text-center">
            <h1>Bienvenido a la Aplicación de Indicadores Económicos</h1>
          </div>
        </div>

        {/* Botón que muestra u oculta los indicadores */}
        <div className="row align-items-center justify-content-between mb-4">
          <div className="col-auto">
            <button onClick={toggleIndicadores} className="btn btn-primary">
              Ver Indicadores Económicos
            </button>
          </div>
        </div>


        <Routes>
          {/* Ruta para mostrar los indicadores económicos */}
          <Route path="/" element={mostrarIndicadores ? <MiApi /> : <div>Presiona el botón para cargar los indicadores.</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
