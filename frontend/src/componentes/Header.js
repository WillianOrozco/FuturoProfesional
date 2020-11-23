import React from "react";
import Logo from "../imagenes/LogoPPI.png";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default class Header extends React.Component {
  cerrarSesion = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("nombre", { path: "/" });
    cookies.remove("apellido", { path: "/" });
    cookies.remove("correo", { path: "/" });
    cookies.remove("usuario", { path: "/" });
    cookies.remove("contraseña", { path: "/" });
    cookies.remove("Desc", { path: "/" });
    cookies.remove("Prof", { path: "/" });
    cookies.remove("id_test", { path: "/" });
  };

  logoUrl = () => {
    var url = window.location.href;
    if (
      url == "https://futuroprofesional.vercel.app/Registro" ||
      url == "https://futuroprofesional.vercel.app/"
    ) {
      window.location.href = "./";
    } else if (url == "https://futuroprofesional.vercel.app/Test") {
      alert(
        "Si deseas salir del test, ve al final de la pantalla y pulsa cancelar"
      );
    } else {
      window.location.href = "./Cuenta";
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col mb-3">
            <div className="fixed-top">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a
                  className="navbar-brand"
                  href="#"
                  onClick={() => {
                    this.logoUrl();
                  }}
                >
                  <img className="logo" src={Logo} alt="" />
                </a>

                <ul className="navbar-nav">
                  <li className="nav-item"></li>
                </ul>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#nav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="nav">
                  <ul className="navbar-nav bg-dark m-0 ml-lg-auto p-3 p-lg-0">
                    <li className="nav-item">
                      <a
                        id="TextNav"
                        className="nav-link text-truncate"
                        href="./CreditosPage"
                      >
                        Créditos
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        id="TextNav"
                        className="nav-link text-truncate"
                        href="#sedes"
                      >
                        Contactanos
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        id="TextNav"
                        className="nav-link text-truncate"
                        href="#sedes"
                      >
                        ¿Qué es FuturoProfesional?
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        onClick={() => this.cerrarSesion()}
                        id="TextNav"
                        className="nav-link"
                        href={this.props.link}
                      >
                        {this.props.boton}
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div
                className="card p-2 border-top bg-dark text-white rounded-bottom collapse"
                id="futuroProfesional"
              >
                Futuro Profesional es una página web que tiene como objetivo dar
                al usuario una guía que pueda reforzar sus pensamientos a la
                hora de elegir una carrera profesional, brindando una serie de
                descripciones y carreras profesionales para el usuario, a través
                de un test realizado en la misma página.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
