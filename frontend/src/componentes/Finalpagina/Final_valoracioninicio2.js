import React from "react";
import "../../styles.css"; //Está ruta la corregí

import{Link} from 'react-router-dom'
function Final_Valoracion() {
  return (
    <div>
      <div>
        {" "}
        <p className="tiulo-Valoracion">
          SI TIENES ALGUNA QUEJA O SUGERENCIANO OLVIDES DEJARLA,LA TENDREMOS MUY
          EN CUENTA!!!!
        </p>
      </div>
      <p> </p>
      <div className="Valorar">
        <input className="Valorar" type="text" placeholder="BUZON" />
        <p> </p>
        
        <div>
      <button
        type="button"
        className="Regresar
  "
      >
        <Link className="Botones" to="valoracioninicio2">Enviar</Link>
      </button>
     </div>

        
      </div>
      <div className="logo">
          <img src="https://github.com/SaraYuliethOsorioHincapie/equipo5_se_ppi2020/blob/master/logo_AC.png?raw=true" />
        </div>
      <p className="Final_Valoracion2">5382978 ò 3013134050</p>
      <p className="Final_Valoracion2">@ColectivosSantaElena</p>
    </div>
 

  );
}
export default Final_Valoracion;
