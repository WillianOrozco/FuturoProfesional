import React from "react";
import "../style/styles.css";
import Header from "../componentes/Header";
import Main from "../componentes/Main";


export default function Inicio() {
  return (
    <div className="fondo">
      <Header boton="Regístrate" link="./Registro" />
      <Main />
    </div>
  );
}
