import React from "react";
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Registro from "../pages/Registro";
import Cuenta from "../pages/Cuenta";
import InfoCuenta from "../pages/InfoCuenta";
import PreResultados from "../pages/PreResultados";
import PRTest from "../pages/PRTest";
import Test from "../pages/Test";
import Resultado from "../pages/Resultado";
import Configuración from "../pages/Configuración";
import CreditosPage from "../pages/CreditosPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/Registro" component={Registro} />
        <Route exact path="/Cuenta" component={Cuenta} />
        <Route exact path="/InfoCuenta" component={InfoCuenta} />
        <Route exact path="/Resultados_Anteriores" component={PreResultados} />
        <Route exact path="/Resultados_Anteriores/Test_1" component={PRTest} />
        <Route exact path="/Test" component={Test} />
        <Route exact path="/Resultado" component={Resultado} />
        <Route exact path="/Configuración" component={Configuración} />
        <Route exact path="/CreditosPage" component={CreditosPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
