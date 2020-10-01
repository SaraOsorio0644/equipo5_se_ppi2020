import React from "react";
import Encabezado from "../componentes/Encabezados/E_IniciodeUsuario";
import Descripcion from "../componentes/Descripcion/D_IniciodeUsuario";
import FinalPagina from "../componentes/Finalpagina/FInal_IniciodeUsuario"
import "../styles.css";

function InicioUsuario() {
  return (
    <div className="fondo">
    
      <Encabezado />
      <Descripcion />
      <FinalPagina />
    
    </div>
  );
}
export default InicioUsuario;