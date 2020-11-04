import React from "react";
import "../../styles.css";
import {Link} from 'react-router-dom'
function D_Registro() {
  return(
  
  
    <form> <div className= "container">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Nombre</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <small id="emailHelp" className="form-text text-muted"></small>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Correo electrónico</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <small id="emailHelp" className="form-text text-muted"></small>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Contraseña</label>
      <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    </div>
    
  <button type="button" class="Regresar
      "><Link className="Botones" to="Funcionusuario">
    Registrarse </Link>
      </button>
  
</form>  


)
}
export default D_Registro;
