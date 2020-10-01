import React from "react";
import Encabezado from "../componentes/Encabezados/E_informacionInicio";
import Descripcion from "../componentes/Descripcion/D_Informacion";
import FinalPagina from "../componentes/Finalpagina/Final_informacionInicio"
import "../styles.css";

function InformacionInicio () {
  return (
    <>
  
<div classname= "fondo">
        <Encabezado />
        
      <Descripcion />
     
      <FinalPagina />
    </div>
    </>
  );
}
export default InformacionInicio;