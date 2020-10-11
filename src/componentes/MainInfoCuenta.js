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
              <a href="https://futuroprofesional.vercel.app/Cuenta">
                <img src={FlechaAtras} width="30" alt="Atrás" />
              </a>
              <h5 className="text-center text-white py-2"> Información de la Cuenta </h5>
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
                  <div>
                    <h5 className="colorAlerta">Nombre Completo</h5>
                    <p>Willian Orozco Cardenas</p>
                  </div>
                  <a href="#popis" className="">
                    <img src={Editar} alt="Editar" width="35" className="m-3" />
                  </a>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h5 className="colorAlerta">Usuario</h5>
                    <p>WillianHill</p>
                  </div>
                  <a href="#popis" className="">
                    <img src={Editar} alt="Editar" width="35" className="m-3" />
                  </a>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h5 className="colorAlerta">Correo Electrónico</h5>
                    <p>elicardenas1986@gmail.com</p>
                  </div>
                  <a href="#popis" className="">
                    <img src={Editar} alt="Editar" width="35" className="m-3" />
                  </a>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h5 className="colorAlerta">Contraseña</h5>
                    <p>**********</p>
                  </div>
                  <a href="#popis" className="">
                    <img src={Editar} alt="Editar" width="35" className="m-3" />
                  </a>
                </div>
                <h5 className="colorAlerta">Test Realizados</h5>
                <p>1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
