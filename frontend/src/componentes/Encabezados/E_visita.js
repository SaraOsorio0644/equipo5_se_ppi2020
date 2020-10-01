import React from "react";
import "../../styles.css"; 
import {Link} from 'react-router-dom'
function E_visita() {
  return (
    <div>
      <button type="button" className="Regresar
      ">
      <Link className="Botones"  to="/">
      Inicio
      </Link>
      </button>
      <h1 className="Titulo_Registro">¿Quién nos visita ?</h1>
      </div>
  );
}

export default E_visita;