import React from "react";
import Foto from "../imagenes/FotoPerfil.jpg";
import Flecha from "../imagenes/Flecha.png";
import FlechaAtras from "../imagenes/FlechaAtras.png";
import Info from "../imagenes/Info.png";
import Cookies from "universal-cookie";

const cookies = new Cookies();


export default class ResultadosAnt extends React.Component {
  render() {
    var nombre = cookies.get("nombre")+" "+cookies.get("apellido");
    return (
      <div className="container-fluid tamañoConfiguracion">
        <div className="row">
          <div className="col my-5 py-5">
            <nav className="navbar p-0 w-100 bg-transparent">
              <a href="./Cuenta">
                <img src={FlechaAtras} width="38" alt="Atrás" />
              </a>
              <h5 className="text-center text-white py-2">
                Resultados Anteriores
              </h5>
              <img src={Info} width="35" alt="Info" />
            </nav>
            <div className="d-flex justify-content-center">
              <img
                src={Foto}
                alt="Foto de Perfil"
                className="rounded-circle"
                width="150"
              />
            </div>
            <h5 className="text-center text-white mb-5">{nombre}</h5>
            <div className="container">
              <div className="text-white p-3 border rounded">
                <div className="d-flex justify-content-between border-bottom">
                    <h6 className="m-2">Test #1</h6>
                    <p className="m-2">05/08/2020</p>
                    <a href="./Resultados_Anteriores/Test_1" className="m-1"><img src={Flecha} width="30" alt="Avanzar" /></a>
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
