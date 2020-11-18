import React from "react";
import "../style/styles.css";
import Header from "../componentes/Header";
import MainInfoCuenta from "../componentes/MainInfoCuenta";

export default function InfoCuenta() {
  return (
    <div className="fondo">
      <Header boton="Cerrar Sesión" link="./" />
      <MainInfoCuenta />
    </div>
  );
}
