import React from "react";
import "../styles.css";
import Descripcion from "../componentes/Descripcion/D_preciosusuario"
import Encabezado from "../componentes/Encabezados/E_preciosInicio"
import FinalPagina from "../componentes/Finalpagina/Final_preciosusuario"

function Preciosinicio() {
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
export default Preciosinicio;