import React from "react";
import Foto from "../imagenes/FotoPerfil.jpg";
import Flecha from "../imagenes/Flecha.png";
import FlechaAtras from "../imagenes/FlechaAtras.png";
import Info from "../imagenes/Info.png";
import Cookies from "universal-cookie";
import Axios from "axios";

const cookies = new Cookies();
const url = "https://ftp-backend.herokuapp.com/tests";
var x = -1;

export default class ResultadosAnt extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      id_test: 0,
      fecha: "",
    };
  }
  siguienteTest = () => {
    Axios.get(url, { params: { id_usuario: cookies.get("id") } })
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .then((res) => {
        if (res.length > 0) {
          if (x <= res.length) {
            if (x >= -1 && x < res.length) {
              x++;
            }
            var r = res[x];
            this.setState({
              id: r.id,
              id_test: x + 1,
              fecha: r.fecha,
            });
          }
          document.getElementById("flecha").style.display = "block";
        }
      })
      .catch((error) => {
        document.getElementById("mensaje1").style.display = "none";
        document.getElementById("mensaje2").style.display = "block";
        console.log(error);
      });
  };
  anteriorTest = () => {
    Axios.get(url, { params: { id_usuario: cookies.get("id") } })
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .then((res) => {
        if (res.length > 0) {
          if (x <= res.length) {
            if (x > -1 && x <= res.length) {
              x--;
            }
            var r = res[x];
            this.setState({
              id: r.id,
              id_test: x + 1,
              fecha: r.fecha,
            });
          }
          document.getElementById("flecha").style.display = "block";
        }
      })
      .catch((error) => {
        document.getElementById("mensaje1").style.display = "none";
        document.getElementById("mensaje2").style.display = "block";
        console.log(error);
      });
  };

  verTest = () => {
    Axios.get(url, { params: { id: this.state.id } })
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .then((res) => {
        if (res.length > 0) {
          var r = res[0];
          cookies.set("id_test", r.id, { path: "/" });
          cookies.set("Desc", r.descripcion, { path: "/" });
          cookies.set("Prof", r.profesion, { path: "/" });
          window.location.href="https://futuroprofesional.vercel.app/Resultados_Anteriores/Test"
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    var nombre = cookies.get("nombre") + " " + cookies.get("apellido");
    return (
      <div className="container-fluid tamañoConfiguracion">
        <div className="row">
          <div className="col my-5 py-5">
            <nav className="navbar p-0 w-100 bg-transparent">
              <a href="https://futuroprofesional.vercel.app/Cuenta">
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
                <div className="d-flex pb-3 justify-content-between border-bottom">
                  <h6 className="m-2">{"Test #" + this.state.id_test}</h6>
                  <p className="m-2">{this.state.fecha}</p>
                  <a
                    id="flecha"
                    onClick={() => {
                      this.verTest();
                    }}
                    href="#"
                    className="testOculto m-1"
                  >
                    <img src={Flecha} width="30" alt="Avanzar" />
                  </a>
                </div>
                <div className="pt-3 d-flex justify-content-between">
                  <button
                    onClick={() => this.anteriorTest()}
                    className="btn btn-success btn-sm"
                  >
                    Test Anterior
                  </button>
                  <div id="mensaje1" className="text-center pt-2">
                    Presiona el boton para buscar tu primer test relizado.
                  </div>
                  <div id="mensaje2" className="testOculto text-center pt-2">
                    No has realizado ningún otro test.
                  </div>
                  <button
                    onClick={() => this.siguienteTest()}
                    className="btn btn-success btn-sm"
                  >
                    Test Siguiente
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
