import React from "react";
import "../style/styles.css";
import Header from "../componentes/Header";
import MainCuenta from "../componentes/MainCuenta";
import Footer from "../componentes/Footer";

export default function Cuenta() {
  return (
    <div>
      <Header boton="Cerrar Sesión" link="https://futuro-profesional.vercel.app/" />
      <MainCuenta />
      <Footer />
    </div>
  );
}
