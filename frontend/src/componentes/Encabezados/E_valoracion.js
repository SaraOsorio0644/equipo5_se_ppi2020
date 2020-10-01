import React from "react";
import "../../styles.css";
import { Link } from "react-router-dom";
function E_valoracion() {
  return (
    <div>
      <button
        type="button"
        className="Regresar
      "
      >
        <Link className="Botones" to="Iniciousuario">Inicio</Link>
      </button>
      <button
        type="button"
        className="Regresar
      "
      >
        <Link className="Botones" to="Solicitarserviciousuario">Volver</Link>
      </button>
      <h1 className="Titulo_Registro">VALORA NUESTRO SERVICIO</h1>
    </div>
  );
}

export default E_valoracion;
