import React from "react";
import "../../styles.css"; 
import {Link} from 'react-router-dom'
function E_Trabajadoresusuario() {
  return (
    <div>
      
    
      <button type="button" className="Regresar
      "><Link className="Botones"  to ="Informacionusuario">
        Volver </Link>
      </button>
      <h1 className="Titulo_Registro">INFORMACION DE CONDUCTORES</h1>
      
      </div>
  );
}

export default E_Trabajadoresusuario;