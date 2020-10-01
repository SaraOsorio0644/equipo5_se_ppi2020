import React from "react";
import "../../styles.css";
import Valoracion from "../../images/sANTA.jpg";
function D_Valoracion() {
  return(
    <>
    <div className = "botones-encabezado">
    <button type="button" className="btn btn-warning">1</button>
<button type="button" className="btn btn-warning">2</button>
<button type="button" className="btn btn-warning">3</button>
<button type="button" className="btn btn-warning">4</button>
<button type="button" className="btn btn-warning">5</button>
</div>
<div className="Imagen1">
<img src={Valoracion} />
</div>
</>
  );
  }
export default D_Valoracion;