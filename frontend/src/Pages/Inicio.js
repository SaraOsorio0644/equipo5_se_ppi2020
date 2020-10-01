import React from "react";
import Encabezado from "../componentes/Encabezados/E_inicio";
import Descripcion from "../componentes/Descripcion/D_inicio";
import FinalPagina from "../componentes/Finalpagina/Final_inicio"
import "../styles.css";

function Inicio() {
  return (
    <>
    
<div className= "fondo">
        <Encabezado />
      <Descripcion />
      <FinalPagina />
    </div>
    </>
  );
}
export default Inicio;
