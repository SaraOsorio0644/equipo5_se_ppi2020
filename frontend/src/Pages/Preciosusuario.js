import React from "react";
import "../styles.css";
import Encabezado from "../componentes/Encabezados/E_preciosusuario"
import Descripcion from "../componentes/Descripcion/D_preciosusuario"
import FinalPagina from "../componentes/Finalpagina/Final_preciosusuario"

function preciosusuario() {
  return (
    <div className= "fondo" >
    
      <Encabezado />
      <Descripcion />
      <p>
         </p>
      <FinalPagina />
    
    </div>
  );
}
export default preciosusuario;  