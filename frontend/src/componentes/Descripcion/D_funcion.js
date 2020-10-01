import React from "react";
import "../../styles.css";
import Funcion  from "../../images/sANTA.jpg";
import {Link} from 'react-router-dom'
function D_funcion() {
  return (
    <>
      <button type="button" className="btn btn-secondary btn-lg btn-block">
       <Link  className ="Botones" to ="Iniciarsesionadm"> Administrador
       </Link>
      </button>
      <button type="button" className="btn btn-secondary btn-lg btn-block">
       <Link className="Botones" to="Iniciarsesionusuario"> Usuario</Link>
      </button>
      <div className="Imagen1">
   <img src={Funcion} />
</div >

    </>
  );
}
export default D_funcion;
