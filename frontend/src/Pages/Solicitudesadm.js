import React from "react";
import "../styles.css";
import Encabezado from "../componentes/Encabezados/E_Solicitudesadm";
import Descripcion from "../componentes/Descripcion/D_Solicitudesadm";
import FinalPagina from "../componentes/Finalpagina/Final_Solicitudesadm";

function Solicitudesadm() {
  return (
    <div className="fondo">
      <Encabezado />
      <Descripcion />
      <p> </p>
      <FinalPagina />
    </div>
  );
}
export default Solicitudesadm;
