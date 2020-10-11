import React from "react";
import "../style/styles.css";
import Header from "../componentes/Header";
import TestAnt from "../componentes/TestAnt";
import Footer from "../componentes/Footer";
import Datos from "../server/Test.json";

export default function PRTest() {
  return (
    <div>
      <Header boton="Cerrar Sesión" link="https://futuroprofesional.vercel.app/" />
      <TestAnt dts={Datos} />
      <Footer />
    </div>
  );
}
