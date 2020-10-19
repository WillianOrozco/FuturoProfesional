import React from "react";
import "../style/styles.css";
import Header from "../componentes/Header";
import Creditos from "../componentes/Creditos";
import Footer from "../componentes/Footer";

export default function Cuenta() {
  return (
    <div>
      <Header boton="Cerrar Sesión" link="https://futuroprofesional.vercel.app/" />
      <Creditos />
    </div>
  );
}
