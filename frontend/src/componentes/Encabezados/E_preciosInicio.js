import React from "react";
import "../../styles.css"; 
import {Link} from 'react-router-dom'
function E_preciosInicio() {
  return (
    <div>
      
    
      <button type="button" className="Regresar
      "><Link className="Botones"  to ="informacionInicio">
        Volver </Link>
      </button>
      <h1 className="Titulo_Registro">PRECIOS</h1>
      
      </div>
  );
}

export default E_preciosInicio;