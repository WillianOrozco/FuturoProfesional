import React from "react";
import Foto from "../imagenes/FotoPerfil.jpg";
import Flecha from "../imagenes/Flecha.png";
import FlechaAtras from "../imagenes/FlechaAtras.png";
import Info from "../imagenes/Info.png";

export default class ResultadosAnt extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col my-5 py-5">
            <nav class="navbar p-0 w-100 bg-transparent">
              <a href="https://futuro-profesional.vercel.app/Cuenta">
                <img src={FlechaAtras} width="30" alt="Atrás" />
              </a>
              <h5 className="text-center text-white py-2">
                Resultados Anteriores
              </h5>
              <img src={Info} width="35" Alt="Info" />
            </nav>
            <div className="d-flex justify-content-center">
              <img
                src={Foto}
                alt="Foto de Perfil"
                className="rounded-circle"
                width="150"
              />
            </div>
            <h5 className="text-center text-white mb-5">Willian Orozco</h5>
            <div className="container">
              <div className="text-white p-3 border rounded">
                <div className="d-flex justify-content-between border-bottom">
                    <h6 className="m-2">Test #1</h6>
                    <p className="m-2">05/08/2020</p>
                    <a href="https://futuro-profesional.vercel.app/Resultados_Anteriores/Test_1" className="m-1"><img src={Flecha} width="30" alt="Avanzar" /></a>
                </div>
                <div className="text-center pt-2">
                  No has realizado ningún otro Test.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
