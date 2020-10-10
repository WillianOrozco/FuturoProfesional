import React from "react";
import "../style/styles.css";
import Header from "../componentes/Header";
import ResultadoAct from "../componentes/ResultadoAct";
import Footer from "../componentes/Footer";
import Datos from "../server/Test.json";

export default function PreResultados() {
  return (
    <div>
      <Header boton="Cerrar Sesión" link="http://localhost:3000/" />
      <ResultadoAct dts={Datos} />
      <Footer />
    </div>
  );
}
