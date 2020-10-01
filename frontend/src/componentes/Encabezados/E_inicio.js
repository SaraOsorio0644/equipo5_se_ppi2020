import React from "react";
import "../../styles.css"; //Está ruta la corregí 
import {Link} from 'react-router-dom'

function E_inicio() {
  return (
    <div>
      <h1 className="Titulo_inicio">Auto-click</h1>
      <div className= "botones-encabezado">
      <button type="button" className="Boton-inicio">
        <Link className="Botones" to="Visitausuario">
        Iniciar Sesión 
        </Link>
        
      </button>
      <button type="button" className="Boton-inicio"> <Link className="Botones" to="Registrarseusuario">
        Registrarse </Link>
      </button>
      <button type="button" className="Boton-inicio"><Link className="Botones"  to="valoracionInicio">
      Valoración </Link>
      </button>
      <button type="button" className="Boton-inicio"> <Link className="Botones"  to="informacionInicio">
        Información </Link>
      </button>
    </div>
    </div>
  );
}

export default E_inicio;
