import React from "react";
import "../style/styles.css";
import Header from "../componentes/Header";
import MainInfoCuenta from "../componentes/MainInfoCuenta";
import Footer from "../componentes/Footer";

export default function InfoCuenta() {
  return (
    <div>
      <Header boton="Cerrar Sesión" link="http://localhost:3000/" />
      <MainInfoCuenta />
      <Footer />
    </div>
  );
}
