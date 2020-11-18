import React from "react";
import "../style/styles.css";
import Header from "../componentes/Header";
import TestAnt from "../componentes/TestAnt";

export default function PRTest() {
  return (
    <div className="fondo">
      <Header boton="Cerrar Sesión" link="./" />
      <TestAnt />
    </div>
  );
}
