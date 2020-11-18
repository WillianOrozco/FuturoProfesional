import React from "react";
import "../style/styles.css";
import Header from "../componentes/Header";
import ResultadosAnt from "../componentes/ResultadosAnt";

export default function PreResultados() {
  return (
    <div className="fondo">
      <Header boton="Cerrar Sesión" link="./" />
      <ResultadosAnt />
    </div>
  );
}
