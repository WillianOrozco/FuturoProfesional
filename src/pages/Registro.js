import React from "react";
import "../style/styles.css";
import Header from "../componentes/Header";
import MainRegistro from "../componentes/MainRegistro";
import Footer from "../componentes/Footer";

export default function Registro() {
  return (
    <div>
      <Header boton="Ingresa" link="http://localhost:3000/" />
      <MainRegistro />
      <Footer />
    </div>
  );
}
