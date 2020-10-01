import React from "react";
import "../styles.css";
import Encabezado from "../componentes/Encabezados/E_Valoracionesadm"
import Descripcion from "../componentes/Descripcion/D_Valoracionesadm"
import FinalPagina from "../componentes/Finalpagina/Final_Valoracionesadm"

function Valoracionesadm() {
  return (
    <div className="fondo">
      <Encabezado />
      <Descripcion />
      <p> </p>
      <FinalPagina />
    </div>
  );
}
export default Valoracionesadm;
