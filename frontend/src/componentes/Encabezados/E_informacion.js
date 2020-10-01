import React from "react";
import "../../styles.css"; 
import {Link} from 'react-router-dom'
function E_informacion() {
  return (
    <div>
      <button type="button" className="Regresar
      "><Link className="Botones"  to ="Iniciousuario">
        Inicio</Link>
      </button>
      <h1 className="Titulo_Registro">COMO NOS PUEDES CONTACTAR </h1>
      
      </div>
  );
}

export default E_informacion;