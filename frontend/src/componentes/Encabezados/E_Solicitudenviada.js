import React from "react";
import "../../styles.css"; 
import {Link} from 'react-router-dom'
function E_Solicitudenviada() {
  return (
    <div>
      
    
      <button type="button" className="Regresar
      "><Link className="Botones"  to ="Solicitudesadm"> 
        inicio </Link> 
      </button>
      <h1 className="Titulo_Registro">SOLUCITUDES PENDIENTES</h1>
      
      </div>
  );
}

export default E_Solicitudenviada;