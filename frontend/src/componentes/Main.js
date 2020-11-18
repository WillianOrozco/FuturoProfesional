import React from "react";
import Facebook from "../imagenes/Facebook.png";
import Google from "../imagenes/Google.png";
import Twitter from "../imagenes/Twitter.png";
import md5 from "md5";
import axios from "axios";
import Cookies from "universal-cookie";

const url = "http://localhost:3001/usuarios";
const cookies = new Cookies();

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        usuario: "",
        contraseña: "",
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
    console.log(this.state.user);
  };

  handleSubmit(e) {
    e.preventDefault();
  }

  ingresarUsuario = async () => {
    const user = this.state.user;
    await axios
      .get(url, { params: {usuario: user.usuario, contraseña: md5(user.contraseña)} })
      .then((res)=>{
        return res.data;
      })
      .then((res) => {
        if (res.length > 0) {
          var respuesta = res[0];
          cookies.set("id", respuesta.id, {path: "/"});
          cookies.set("nombre", respuesta.nombre, {path: "/"});
          cookies.set("apellido", respuesta.apellido, {path: "/"});
          cookies.set("usuario", respuesta.usuario, {path: "/"});
          cookies.set("correo", respuesta.correo, {path: "/"});
          cookies.set("contraseña", respuesta.contraseña, {path: "/"});
          window.location.href = "./Cuenta";
        } else {
          alert("El usuario o contraseña son incorrectos");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex justify-content-center my-5 py-5">
            <div className="">
              <h2 className="text-center text-white tamañoMaximo mb-4">
                Deseamos ayudarte en tu camino en búsqueda del profesionalismo
                para que elijas siempre tu mejor opción
              </h2>
              <div className="container tamañoMaximo py-3 bg-dark rounded text-white">
                <h4 className="text-center pb-3 w-100 border-bottom">
                  Ingresa Ya!
                </h4>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Usuario</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.user.usuario}
                    onChange={this.handleChange}
                    name="usuario"
                    placeholder="Usuario"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Contraseña</label>
                  <input
                    type="password"
                    value={this.state.user.contraseña}
                    onChange={this.handleChange}
                    name="contraseña"
                    className="form-control"
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <div className="">
                    <div className="d-flex jusify-content-start">
                      <a href="#twit">
                        <img
                          src={Twitter}
                          alt="Twitter"
                          className="img-fluid"
                          width="35"
                        />
                      </a>
                      <a href="#gugol">
                        <img
                          src={Google}
                          alt="Google"
                          className="img-fluid"
                          width="35"
                        />
                      </a>
                    </div>
                    <div className="d-flex justify-content-center">
                      <a href="#feisbuk">
                        <img
                          src={Facebook}
                          alt="Facebook"
                          className="img-fluid"
                          width="40"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="py-3">
                    <a
                      className="recuperarContraseña m-1"
                      data-toggle="collapse"
                      href="#olvidasteTuContraseña"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      ¿Olvidaste tu contraseña?
                    </a>
                    <button
                      type="submit"
                      onClick={() => this.ingresarUsuario()}
                      className="btn btn-sm btn-success m-1"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="container mt-1 p-2 rounded bg-dark text-white collapse"
                id="olvidasteTuContraseña"
              >
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Nombre y Apellido</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ejemplo@gmail.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Correo Electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="ejemplo@gmail.com"
                  />
                  <small>Escribe tu correo electrónico.</small>
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-sm btn-success m-1">
                    Submit
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
