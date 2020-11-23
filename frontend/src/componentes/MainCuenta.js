import React from "react";
import Foto from "../imagenes/FotoPerfil.jpg";
import Info from "../imagenes/Info.png";
import Flecha from "../imagenes/Flecha.png";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default class MainCuenta extends React.Component {
  render() {
    var nombre = cookies.get("nombre")+" "+cookies.get("apellido");
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col my-5 py-5">
            <div className="d-flex justify-content-center">
              <img
                src={Foto}
                alt="Foto de Perfil"
                className="rounded-circle"
                width="150"
              />
            </div>
            <h5 className="text-center text-white mb-5">{nombre}</h5>
            <div className="navbar text-white rounded-pill my-2 bg-color">
              <a
                data-toggle="collapse"
                href="#alerta1"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <img src={Info} alt="info" width="35" />
              </a>
              <a
                className="text-white text-decoration-none"
                href="https://futuroprofesional.vercel.app/Test"
              >
                Nuevo Test
              </a>
              <a href="https://futuroprofesional.vercel.app/Test">
                <img src={Flecha} alt="Avanzar" width="38" />
              </a>
            </div>
            <div
              className="alert colorAlerta alert-info bg-transparent border-0 m-0 rounded-0 collapse"
              role="alert"
              id="alerta1"
            >
              Aquí puedes realizar tus test. Procura ser honesto en tus
              respuestas.
            </div>
            <div className="navbar text-white rounded-pill my-2 bg-color">
              <a
                data-toggle="collapse"
                href="#alerta2"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <img src={Info} alt="info" width="35" />
              </a>
              <a
                className="text-white text-decoration-none"
                href="https://futuroprofesional.vercel.app/Resultados_Anteriores"
              >
                Resultados Anteriores
              </a>
              <a href="https://futuroprofesional.vercel.app/Resultados_Anteriores">
                <img src={Flecha} alt="Avanzar" width="38" />
              </a>
            </div>
            <div
              className="alert colorAlerta alert-info bg-transparent border-0 m-0 rounded-0 collapse"
              role="alert"
              id="alerta2"
            >
              Aquí puedes ver los resultados de los test que hayas realizado
              anteriormente.
            </div>
            <div className="navbar text-white rounded-pill my-2 bg-color">
              <a
                data-toggle="collapse"
                href="#alerta3"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <img src={Info} alt="info" width="35" />
              </a>
              <a
                className="text-white text-decoration-none"
                href="https://futuroprofesional.vercel.app/InfoCuenta"
              >
                Información de la Cuenta
              </a>
              <a href="https://futuroprofesional.vercel.app/InfoCuenta">
                <img src={Flecha} alt="Avanzar" width="38" />
              </a>
            </div>
            <div
              className="alert colorAlerta alert-info bg-transparent border-0 m-0 rounded-0 collapse"
              role="alert"
              id="alerta3"
            >
              Aquí puedes ver los detalles de tu cuenta en futuroProfesional.
            </div>
            <div className="navbar text-white rounded-pill my-2 bg-color">
              <a
                data-toggle="collapse"
                href="#alerta4"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <img src={Info} alt="info" width="35" />
              </a>
              <a
                className="text-white text-decoration-none"
                href="https://futuroprofesional.vercel.app/Configuración"
              >
                Configuración
              </a>
              <a href="https://futuroprofesional.vercel.app/Configuración">
                <img src={Flecha} alt="Avanzar" width="38" />
              </a>
            </div>
            <div
              className="alert colorAlerta alert-info bg-transparent border-0 m-0 rounded-0 collapse"
              role="alert"
              id="alerta4"
            >
              Aquí puedes configurar aspectos de la página.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
