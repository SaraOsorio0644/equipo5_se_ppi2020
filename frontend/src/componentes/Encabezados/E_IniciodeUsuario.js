import React from "react";
import "../../styles.css"; //Está ruta la corregí 
import {Link} from 'react-router-dom'
function E_InicioUsuario() {
  return (
    <div>
      <h1 className="Titulo_inicio">Auto-click</h1>
      <div className= "botones-encabezado">
      <button type="button" className="Boton-inicio"><Link className="Botones" to="/">
        Volver Inicio </Link>
      </button>
      <button type="button" className="Boton-inicio">
   <Link className="Botones" to= "Solicitarserviciousuario"> SolicitarServicio</Link>
       </button>
     
      <button type="button" className="Boton-inicio"><Link className="Botones"  to ="Informacionusuario">
        Información </Link>
      </button>
    </div>
    </div>
  );
}

export default E_InicioUsuario;
