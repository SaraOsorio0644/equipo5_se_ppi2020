import React from "react";
import Encabezado from "../componentes/Encabezados/E_Inicioadm";
import Descripcion from "../componentes/Descripcion/D_Inicioadm";
import FinalPagina from "../componentes/Finalpagina/Final_Inicioadm";
import "../styles.css";

function Inicioadm() {
  return (
    <div className="fondo">
      <Encabezado />
      <Descripcion />
      <FinalPagina />
    </div>
  );
}
export default Inicioadm;
