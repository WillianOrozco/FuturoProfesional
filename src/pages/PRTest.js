import React from "react";
import "../style/styles.css";
import Header from "../componentes/Header";
import TestAnt from "../componentes/TestAnt";
import Footer from "../componentes/Footer";
import Datos from "../server/Test.json";

export default function PRTest() {
  return (
    <div>
      <Header boton="Cerrar Sesión" link="http://localhost:3000/" />
      <TestAnt dts={Datos} />
      <Footer />
    </div>
  );
}
