import React from "react";
import "../style/styles.css";
import Header from "../componentes/Header";
import TestAct from "../componentes/TestAct";
import Footer from "../componentes/Footer";

export default function Test() {
  return (
    <div>
      <Header boton="Cerrar Sesión" link="https://futuroprofesional.vercel.app/" />
      <TestAct />
    </div>
  );
}
