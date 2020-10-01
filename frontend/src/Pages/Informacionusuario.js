import React from "react";
import Encabezado from "../componentes/Encabezados/E_informacion";
import Descripcion from "../componentes/Descripcion/D_Informacion";
import FinalPagina from "../componentes/Finalpagina/Final_informacion"
import "../styles.css";

function Informacion () {
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
export default Informacion;