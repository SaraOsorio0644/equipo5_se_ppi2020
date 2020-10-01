import React from "react";
import "../styles.css";
import Encabezado from "../componentes/Encabezados/E_valoracion"
import Descripcion from "../componentes/Descripcion/D_valoracion"
import FinalPagina from "../componentes/Finalpagina/Final_valoracion"

function Valoracionusuario2() {
  return (
    <div className= "fondo" >
    
      <Encabezado />
      <Descripcion />
      <FinalPagina />
    
    </div>
  );
}
export default Valoracionusuario2; 