import React from "react";
import "../../styles.css"; 
import {Link} from 'react-router-dom'
function E_TrabajadoresInicio() {
  return (
    <div>
      
    
      <button type="button" className="Regresar
      "><Link className="Botones" to ="informacionInicio">
      
    Volver </Link>
      
    
      </button>
      <h1 className="Titulo_Registro">INFORMACION DE CONDUCTORES</h1>
      
      </div>
  );
}

export default E_TrabajadoresInicio;