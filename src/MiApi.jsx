import React, { useEffect, useState } from 'react';
import Buscador from './Buscador';

function MiApi() {
  const [datos, setDatos] = useState([]);
  const [filtrados, setFiltrados] = useState([]);
  const [orden, setOrden] = useState('asc');

  useEffect(() => {
    fetch('https://mindicador.cl/api')
      .then(response => response.json())
      .then(data => {
        const indicadoresArray = Object.keys(data).map(key => {
          return { ...data[key], key: key };
        }).filter(indicador => indicador.codigo);
        
        ordenarDatos(indicadoresArray);
      });
  }, [orden]); 

  const ordenarDatos = (datosParaOrdenar) => {
    const datosOrdenados = [...datosParaOrdenar].sort((a, b) => {
      if (orden === 'asc') {
        return a.nombre.localeCompare(b.nombre);
      } else {
        return b.nombre.localeCompare(a.nombre);
      }
    });

    setDatos(datosOrdenados);
    setFiltrados(datosOrdenados); 
  };

  const cambiarOrden = () => {
    setOrden(orden === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div>
      <Buscador datos={datos} setFiltrados={setFiltrados} />
      <button onClick={cambiarOrden} className="btn btn-secondary mb-3">Cambiar Orden</button>
      <ul className="list-group">
        {filtrados.map((dato, index) => (
          <li key={index} className="list-group-item">
            {dato.nombre}: {dato.valor}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MiApi;
