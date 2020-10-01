import React from "react";
import "../../styles.css"; 
import {Link} from 'react-router-dom'

function E_Valoracionesadm() {
  return (
    <div>
      
    
      <button type="button" className="Regresar
      "><Link className="Botones" to ="Inicioadm">
        inicio </Link>
      </button>
      <h1 className="Titulo_Registro">VALORACIONES</h1>
      
      </div>
  );
}

export default E_Valoracionesadm;