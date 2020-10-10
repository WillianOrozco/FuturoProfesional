import React from "react";
import "../style/styles.css";
import Header from "../componentes/Header";
import ResultadosAnt from "../componentes/ResultadosAnt";
import Footer from "../componentes/Footer";

export default function PreResultados() {
  return (
    <div>
      <Header boton="Cerrar Sesión" link="http://localhost:3000/" />
      <ResultadosAnt />
      <Footer />
    </div>
  );
}