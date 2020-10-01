import React from "react";
import { Link } from "react-router-dom";
import "../../styles.css";


function E_Registrarse() {
  return (
    <div>
      <button
        type="button"
        className="Regresar
      "
      > <Link className="Botones" to="/">
        Inicio </Link>
      </button>
      <h1 className="Titulo_Registro">Registráte</h1>
    </div>
  );
}

export default E_Registrarse;
