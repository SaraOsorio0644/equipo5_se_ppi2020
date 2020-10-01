import React from "react";
import "../../styles.css";
import Funcion from "../../images/sANTA.jpg";

function D_solicitudexitosa()

 {
  return(
<>
    <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Solicitud Exitosa!</h4>
<p>El auto con placa HYG689 va para alla.</p>
  
  </div>
<div className="Imagen1">
   <img src={Funcion} />
</div >
</>
  )
 }
 export default D_solicitudexitosa;
