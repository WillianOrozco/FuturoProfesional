import React from "react";
import "../style/styles.css";
import Header from "../componentes/Header";
import MainRegistro from "../componentes/MainRegistro";

export default function Registro() {
  return (
    <div className="fondo">
      <Header boton="Ingresa" link="./" />
      <MainRegistro />
    </div>
  );
}
