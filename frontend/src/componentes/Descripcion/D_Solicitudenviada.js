import React from "react";
import "../../styles.css";
import Funcion from "../../images/sANTA.jpg";

function D_solicitudenviada()

 {
  return(
<>
    <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Enviado!</h4>
<p>Acabas de dar respuesta a esta solicitud.</p>
  
  </div>
<div className="Imagen1">
   <img src={Funcion} />
</div >
</>
  )
 }
 export default D_solicitudenviada;