import React from "react";
import { Link } from "react-router-dom";
import "../../styles.css"; 

function E_SolicitarServicio() {
  return (
    <div>
      <button type="button" className="Regresar
      "><Link className="Botones"to ="Iniciousuario">
       Inicio</Link>
      </button>
      <h1 className="Titulo_Registro">Solicitar Servicio</h1>
      
      </div>
  );
}

export default E_SolicitarServicio;