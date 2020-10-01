import React from "react";
import "../../styles.css"; 
import {Link} from 'react-router-dom'
function E_valoracionInicio() {
  return (
    <div>
      
      <button type="button" className="Regresar
      "> <Link className="Botones" to ="/">
        Inicio </Link>
     
      </button>
      <h1 className="Titulo_Registro">VALORA NUESTRO SERVICIO</h1>
      
      </div>
  );
}

export default E_valoracionInicio;