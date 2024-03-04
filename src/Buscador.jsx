import React, { useState } from 'react';

function Buscador({ datos, setFiltrados }) {
  const [busqueda, setBusqueda] = useState('');

  const filtrarDatos = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const resultados = datos.filter((dato) => {
        return dato.nombre.toLowerCase().includes(keyword.toLowerCase());

      });
      setFiltrados(resultados);
    } else {
      setFiltrados(datos);
    }
    setBusqueda(keyword);
  };

  return (
    <div className="mb-3">
      <input
        type="search"
        value={busqueda}
        onChange={filtrarDatos}
        className="form-control"
        placeholder="Buscar..."
      />
    </div>
  );
}

export default Buscador;
