import React from "react";
import "../styles.css";
import Encabezado from "../componentes/Encabezados/E_Trabajadoresinicio";
import Descripcion from "../componentes/Descripcion/D_Trabajadoresusuario";
import FinalPagina from "../componentes/Finalpagina/Final_Trabajadoresusuario";

function TrabajadoresInicio() {
  return (
    <div className="fondo">
      <Encabezado />
      <Descripcion />
      <p> </p>
      <FinalPagina />
    </div>
  );
}
export default TrabajadoresInicio;
