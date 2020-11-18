import React from "react";
import "../style/styles.css";
import Header from "../componentes/Header";
import ResultadoAct from "../componentes/ResultadoAct";

export default function PreResultados() {
  return (
    <div className="fondo">
      <Header boton="Cerrar Sesión" link="./" />
      <ResultadoAct />
    </div>
  );
}
