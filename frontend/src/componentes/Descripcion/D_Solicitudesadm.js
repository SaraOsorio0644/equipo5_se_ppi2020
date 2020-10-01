import React from "react"
import "../../styles.css";
import {Link} from 'react-router-dom'
function D_Solicitudesadm() {
  return(
  <>
    <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ANA MARIA HINCAPIE
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitudenviada">HYG689</Link></a>
      <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitudenviada">CFT777</Link></a>
      <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitudenviada">TRD443</Link></a>
      <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitudenviada">NJU665</Link></a>
    </div>
  </div>
 <p> </p>

 <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    ANDRES OSORIO
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitudenviada">CFT777</Link></a>
      <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitudenviada">TRD443</Link></a>
      <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitudenviada">NJU665</Link></a>
      <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitudenviada">HYG689</Link></a>
    </div>
  </div>

  <p> </p>

 <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    RODRIGO HERNANDEZ
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitudenviada">NJU665</Link></a>
      <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitudenviada">HYG689</Link></a>
      <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitudenviada">CFT777</Link></a>
      <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitudenviada">TRD443</Link></a>
    </div>
  </div>

  <p> </p>

 <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    JOHANA RUIZ
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitudenviada"></Link>TDR443</a>
      <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitudenviada">NJU665</Link></a>
      <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitudenviada">HYG689</Link></a>
      <a className="dropdown-item" href="/"><Link className="Botones" to="Solicitudenviada">CFT777</Link></a>
    </div>
  </div>
</>

 

  

)
}
export default D_Solicitudesadm;