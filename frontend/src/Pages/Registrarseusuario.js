import React from "react";
import Encabezado from "../componentes/Encabezados/E_Registrarse";
import Descripcion from "../componentes/Descripcion/D_Registrarse";
import FinalPagina from "../componentes/Finalpagina/Final_Registrarse"
import "../styles.css";

function Registrarse() {
  return (
   
    <>
      <Encabezado />
      <Descripcion />
      <FinalPagina />
    
   </>
  );
}
export default Registrarse;