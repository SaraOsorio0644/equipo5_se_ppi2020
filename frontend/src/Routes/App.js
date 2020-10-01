import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../Pages/Inicio";
import Registrarseusuario from "../Pages/Registrarseusuario";
import Funcionusuario from "../Pages/Funcionusuario";
import Iniciarsesionusuario from "../Pages/Iniciarsesionusuario";
import Iniciarsesionadm from "../Pages/Iniciarsesionadm";
import Informacionusuario from "../Pages/Informacionusuario";
import Inicioadm from "../Pages/Inicioadm";
import Iniciousuario from "../Pages/Iniciousuario";
import Preciosinicio from "../Pages/Preciosinicio";
import Preciosusuario from "../Pages/Preciosusuario";
import Solicitarserviciousuario from "../Pages/Solicitarserviciousuario";
import Solicitudesadm from "../Pages/Solicitudesadm";
import Trabajadoresusuario from "../Pages/Trabajadoresusuario";
import TrabajadoresInicio from "../Pages/TrabjadoresInicio";
import Valoracionesadm from "../Pages/Valoracionesadm";
import Valoracionusuario from "../Pages/Valoracionusuario";
import Visitausuario from "../Pages/Visitausuario";
import informacionInicio from "../Pages/informacionInicio";
import ValoracionInicio from "../Pages/valoracionInicio";
import Valoracionusuario2 from "../Pages/Valoracionusuario2"
import valoracioninicio2 from "../Pages/valoracioninicio2"
import solicitudexitosa from "../Pages/Solicitudexitosa"
import Solicitudenviada from "../Pages/Solicitudenviada"
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route
            exactSolicitudenviada
            path="/Solicitudenviada"
            component={Solicitudenviada}
        />
          <Route
            exact
            path="/solicitudexitosa"
            component={solicitudexitosa}
          />
          <Route
            exact
            path="/Registrarseusuario"
            component={Registrarseusuario}
          />

<Route exact path="/valoracionInicio" component={ValoracionInicio} />
        
        
          <Route exact path="/Funcionusuario" component={Funcionusuario} />
          <Route
            exact
            path="/Iniciarsesionusuario"
            component={Iniciarsesionusuario}
          />
          <Route exact path="/Iniciarsesionadm" component={Iniciarsesionadm} />
          <Route
            exact
            path="/Informacionusuario"
            component={Informacionusuario}
          />

          <Route exact path="/Inicioadm" component={Inicioadm} />

          <Route exact path="/Iniciousuario" component={Iniciousuario} />

          <Route exact path="/Preciosinicio" component={Preciosinicio} />

          <Route exact path="/Preciosusuario" component={Preciosusuario} />

          <Route
            exact
            path="/Solicitarserviciousuario"
            component={Solicitarserviciousuario}
          />

          <Route exact path="/Solicitudesadm" component={Solicitudesadm} />

          <Route
            exact
            path="/Trabajadoresusuario"
            component={Trabajadoresusuario}
          />

          <Route
            exact
            path="/TrabajadoresInicio"
            component={TrabajadoresInicio}
          />

          <Route exact path="/Valoracionesadm" component={Valoracionesadm} />

          <Route
            exact
            path="/Valoracionusuario"
            component={Valoracionusuario}
          />

          <Route exact path="/Visitausuario" component={Visitausuario} />

          <Route
            exact
            path="/informacionInicio"
            component={informacionInicio}
          />

          <Route exact path="/Valoracionusuario2" component={ValoracionInicio} />
          <Route
            exact
            path="/Valoracionusuario2"
            component={Valoracionusuario2}

          />
          
          
            <Route exact path="/valoracioninicio2" component={valoracioninicio2} />
        
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
