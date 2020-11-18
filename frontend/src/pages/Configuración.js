import React from "react";
import "../style/styles.css";
import Header from "../componentes/Header";
import Configuración from "../componentes/MainConfiguración";

export default function InfoCuenta() {
  return (
    <div className="fondo">
      <Header boton="Cerrar Sesión" link="./" />
      <Configuración />
    </div>
  );
}
