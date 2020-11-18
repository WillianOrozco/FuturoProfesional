import React from "react";
import Foto from "../imagenes/FotoPerfil.jpg";
import Editar from "../imagenes/Editar.png";
import FlechaAtras from "../imagenes/FlechaAtras.png";
import Info from "../imagenes/Info.png";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default class Main extends React.Component {
  render() {
    var nombre = cookies.get("nombre");
    var apellido = cookies.get("apellido");
    var usuario = cookies.get("usuario");
    var correo = cookies.get("correo");
    var contraseña = cookies.get("contraseña");

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col my-5 py-5">
            <nav className="navbar p-0 w-100 bg-transparent">
              <a href="./Cuenta">
                <img src={FlechaAtras} width="38" alt="Atrás" />
              </a>
              <h5 className="text-center text-white py-2"> Información de la Cuenta </h5>
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
            <h5 className="text-center text-white mb-5">{nombre+" "+apellido}</h5>
            <div className="container-sm">
              <div className="text-white p-3 border rounded">
                <div className="d-flex justify-content-between">
                  <div>
                    <h5 className="colorAlerta">Nombre Completo</h5>
                    <p>{nombre+" "+apellido}</p>
                  </div>
                  <a href="#popis" className="">
                    <img src={Editar} alt="Editar" width="35" className="m-3" />
                  </a>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h5 className="colorAlerta">Usuario</h5>
                    <p>{usuario}</p>
                  </div>
                  <a href="#popis" className="">
                    <img src={Editar} alt="Editar" width="35" className="m-3" />
                  </a>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h5 className="colorAlerta">Correo Electrónico</h5>
                    <p>{correo}</p>
                  </div>
                  <a href="#popis" className="">
                    <img src={Editar} alt="Editar" width="35" className="m-3" />
                  </a>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h5 className="colorAlerta">Contraseña</h5>
                    <input disabled className="bg-transparent border-0" type="password" value={contraseña}/>
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
