import React from "react";
import "../../styles.css";

import {Link } from 'react-router-dom'
function Final_Informacion() {
  return (
   <>
   <div className="final_info">
     <button type="button" className="botoninfo1
      "><Link className="Botones" to ="Preciosusuario">
        Precios</Link>
      </button>
      <button type="button" className="botoninfo2
      "><Link className="Botones" to ="Trabajadoresusuario">
        
        Quienes Trabajan </Link>
      </button>
      </div>
      <div className="logo">
          <img src="https://github.com/SaraYuliethOsorioHincapie/equipo5_se_ppi2020/blob/master/logo_AC.png?raw=true" />
        <img src="" />
      </div>
    </>
  );
}
export default Final_Informacion;
