import React from "react";
import axios from "axios";
import Facebook from "../imagenes/Facebook.png";
import Google from "../imagenes/Google.png";
import Twitter from "../imagenes/Twitter.png";
import md5 from "md5";
import { error } from "jquery";

const url = "https://ftp-backend.herokuapp.com/usuarios";

export default class MainRegistro extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        nombre: "",
        apellido: "",
        correo: "",
        usuario: "",
        contraseña: "",
        ccontraseña: "",
      },
    };
  }

  handleChange = async (e) => {
    await this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit(e) {
    e.preventDefault();
  }

  verificarUsuario = () => {
    var user = this.state.user;
    var nombre = user.nombre;
    var apellido = user.apellido;
    var email = user.correo;
    var usuario = user.usuario;
    var contraseña = user.contraseña;
    var ccontraseña = user.ccontraseña;
    if (
      nombre == "" ||
      apellido == "" ||
      email == "" ||
      usuario == "" ||
      contraseña == "" ||
      ccontraseña == ""
    ) {
      document.getElementById("Mensaje1").style.display = "block";
    } else {
      axios
        .get(url, { params: { correo: email } })
        .then((res) => {
          return res.data;
        })
        .then((res) => {
          if (res.length > 0) {
            document.getElementById("Mensaje2").style.display = "block";
          } else {
            document.getElementById("Mensaje2").style.display = "none";
            this.crearUsuario();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  crearUsuario = async () => {
    const user = this.state.user;
    await axios
      .post(url, {
        nombre: user.nombre,
        apellido: user.apellido,
        correo: user.correo,
        usuario: user.usuario,
        contraseña: md5(user.contraseña),
      })
      .then(() => {
        window.location.href = "https://futuroprofesional.vercel.app/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col my-5 py-5">
            <div className="container tamañoMaximo py-3 bg-dark rounded text-white">
              <h4 className="text-center pb-3 w-100 border-bottom">
                Regístrate Ya!
              </h4>
              <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  value={this.state.nombre}
                  onChange={this.handleChange}
                  className="form-control"
                  name="nombre"
                  placeholder="David Jesús"
                />
              </div>
              <div className="form-group">
                <label>Apellido</label>
                <input
                  type="text"
                  value={this.state.apellido}
                  onChange={this.handleChange}
                  className="form-control"
                  name="apellido"
                  placeholder="Correa Castillo"
                />
              </div>
              <div className="form-group">
                <label>Usuario</label>
                <input
                  type="text"
                  value={this.state.usuario}
                  onChange={this.handleChange}
                  className="form-control"
                  name="usuario"
                  placeholder="DavidJCC15"
                />
              </div>
              <div className="form-group">
                <label>Correo Electrónico</label>
                <input
                  type="email"
                  value={this.state.correo}
                  onChange={this.handleChange}
                  className="form-control"
                  name="correo"
                  placeholder="ejemplo@gmail.com"
                />
              </div>
              <div className="form-group">
                <label>Contraseña</label>
                <input
                  type="password"
                  value={this.state.contraseña}
                  onChange={this.handleChange}
                  className="form-control"
                  name="contraseña"
                />
              </div>
              <div className="form-group">
                <label>Confirmar Contraseña</label>
                <input
                  type="password"
                  value={this.state.ccontraseña}
                  onChange={this.handleChange}
                  className="form-control"
                  name="ccontraseña"
                />
              </div>
              <div>
                <p id="Mensaje1" className="mensajeOculto">
                  Debes llenar todos los campos
                </p>
              </div>
              <div>
                <p id="Mensaje2" className="mensajeOculto">
                  El correo ingresado ya existe
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <div className="">
                  <a href="#popis">
                    <img
                      src={Facebook}
                      alt="..."
                      className="img-fluid"
                      width="35"
                    />
                  </a>
                  <a href="#popis">
                    <img
                      src={Google}
                      alt="..."
                      className="img-fluid"
                      width="30"
                    />
                  </a>
                  <a href="#popis">
                    <img
                      src={Twitter}
                      alt="..."
                      className="img-fluid"
                      width="30"
                    />
                  </a>
                </div>
                <button
                  onClick={() => this.verificarUsuario()}
                  type="submit"
                  className="btn btn-sm btn-success m-1"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
