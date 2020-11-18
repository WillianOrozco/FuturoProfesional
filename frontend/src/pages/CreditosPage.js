import React from "react";
import "../style/styles.css";
import Header from "../componentes/Header";
import Creditos from "../componentes/Creditos";

export default function Cuenta() {
  return (
    <div className="fondo">
      <Header boton="Cerrar Sesión" link="./" />
      <Creditos />
    </div>
  );
}
