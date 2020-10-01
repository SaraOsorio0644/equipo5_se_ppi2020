import React from "react";
import "../../styles.css"; //Está ruta la corregí
import logo from "../../images/logooo.jpg";
import { Link } from "react-router-dom";
function Final_SolicitarServicio() {
  return (
    <div>
      <div>
        {" "}
        <p className="tiulo-SolicitarServicio">
          NO OLVIDES VALORAR NUESTRO SERVICIO
        </p>
        <button type="button" class="Boton-inicio">
          <Link className="Botones" to="Valoracionusuario">
            Valoracion
          </Link>
        </button>
        <div className="logo3">
          <img src={logo} />
        </div>
        <p className="Final_SolicitarServicio">5382978 ò 3013134050</p>
        <p className="Final_SolicitarServicio">@ColectivosSantaElena</p>
      </div>
    </div>
  );
}
export default Final_SolicitarServicio;
