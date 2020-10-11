import React from "react";
import "../style/styles.css";
import Header from "../componentes/Header";
import Main from "../componentes/Main";
import Footer from "../componentes/Footer";


export default function Inicio() {
  return (
    <div>
      <Header boton="Regístrate" link="https://futuroprofesional.vercel.app/Registro" />
      <Main />
      <Footer />
    </div>
  );
}
