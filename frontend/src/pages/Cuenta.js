import React from "react";
import "../style/styles.css";
import Header from "../componentes/Header";
import MainCuenta from "../componentes/MainCuenta";

export default function Cuenta() {
  return (
    <div className="fondo">
      <Header boton="Cerrar Sesión" link="./" />
      <MainCuenta />
    </div>
  );
}
