import React from "react";
import "../style/styles.css";
import Header from "../componentes/Header";
import TestAct from "../componentes/TestAct";

export default function Test() {
  return (
    <div className="fondo">
      <Header boton="Cerrar Sesión" link="./" />
      <TestAct />
    </div>
  );
}
