import React from "react";
import Foto from "../imagenes/FotoPerfil.jpg";
import Editar from "../imagenes/Editar.png";
import FlechaAtras from "../imagenes/FlechaAtras.png";
import Info from "../imagenes/Info.png";

export default class Main extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col my-5 py-5">
            <nav class="navbar p-0 w-100 bg-transparent">
              <a href="http://localhost:3000/Cuenta">
                <img src={FlechaAtras} width="30" alt="Atrás" />
              </a>
              <h5 className="text-center text-white py-2"></h5>
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
            <div className="container-sm">
              <div className="text-white p-3 border rounded">
                <div className="d-flex justify-content-between">
                  <h6>Modo Ligth</h6>
                  <div class="custom-control custom-switch">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customSwitch1"
                    />
                    <label class="custom-control-label" for="customSwitch1">
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
