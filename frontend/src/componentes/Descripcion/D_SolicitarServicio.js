import React from "react";
import "../../styles.css";
import Funcion from "../../images/sANTA.jpg";
import {Link} from 'react-router-dom'
function D_SolicitarServicio()

 {
  return(
    
   <>
   <div className="fondo">
    <div className="desplegable">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Selecciona la vereda
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdown-Button">
    <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitarserviciousuario">Piedra gorda</Link></a>
    <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitarserviciousuario">San Ignacio</Link></a>
    <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitarserviciousuario">Perico</Link></a>
    <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitarserviciousuario">Brisas</Link></a>
    <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitarserviciousuario">El Plan</Link></a>
    <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitarserviciousuario">Mazo</Link></a>
   <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitarserviciousuario">Llano</Link></a>
    <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitarserviciousuario">El Placer</Link></a>
    <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitarserviciousuario">Perico</Link></a>
    <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitarserviciousuario">Media Luna</Link></a>
    <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitarserviciousuario">Barro Blanco</Link></a>
    <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitarserviciousuario">Tambo</Link></a>

    
  </div>

</div>

<p>       </p>
<input class="form-control form-control-sm" type="text" placeholder="Ubicacion"/>
<p>       </p>
<button
        type="button"
        className="Regresar
  "
      >
        <Link className="Botones" to="solicitudexitosa">Solicitar</Link>
      </button>
<div className="Imagen1">
   <img src={Funcion} />
</div >
</div>
</>


);
}
export default D_SolicitarServicio;