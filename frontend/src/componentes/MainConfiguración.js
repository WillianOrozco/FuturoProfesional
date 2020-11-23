import React from "react";
import Foto from "../imagenes/FotoPerfil.jpg";
import FlechaAtras from "../imagenes/FlechaAtras.png";
import Info from "../imagenes/Info.png";

export default class Main extends React.Component {
  render() {
    return (
      <div className="container-fluid tamañoConfiguracion">
        <div className="row">
          <div className="col my-5 py-5">
            <nav className="navbar p-0 w-100 bg-transparent">
              <a href="https://futuroprofesional.vercel.app/Cuenta">
                <img src={FlechaAtras} width="38" alt="Atrás" />
              </a>
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
            <h5 className="text-center text-white mb-5">Willian Orozco</h5>
            <div className="container-sm">
              <div className="text-white p-3 border rounded">
                <div className="d-flex justify-content-between">
                  <h6 >Modo Ligth</h6>
                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                    />
                    <label className="custom-control-label" htmlFor="customSwitch1">
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
