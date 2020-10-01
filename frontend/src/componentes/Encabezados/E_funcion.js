import React from "react";
import "../../styles.css"; 
import {Link} from 'react-router-dom'
function E_funcion() {
  return (
    <div>
      <button type="button" className="Regresar
      "> <Link className="Botones"  to ='Registrarseusuario'>
      Inicio </Link>
      </button>
      <h1 className="Titulo_Registro">¿Qué función cumples??</h1>
      </div>
  );
}

export default E_funcion;
