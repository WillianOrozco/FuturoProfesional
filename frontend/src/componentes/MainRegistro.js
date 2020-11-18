import React from "react";
import axios from "axios";
import Facebook from "../imagenes/Facebook.png";
import Google from "../imagenes/Google.png";
import Twitter from "../imagenes/Twitter.png";
import md5 from "md5";

const url ="http://localhost:3001/usuarios";

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

  crearUsuario=async()=>{
    const user = this.state.user;
    axios
      .post(url, {
        nombre: user.nombre,
        apellido: user.apellido,
        correo: user.correo,
        usuario: user.usuario,
        contraseña: md5(user.contraseña),
      })
      .then((res) => {
        alert(res)
        window.location.href="./"
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col my-5 py-5">
            <form className="container tamañoMaximo py-3 bg-dark rounded text-white">
              <h4 className="text-center pb-3 w-100 border-bottom">
                Regístrate Ya!
              </h4>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Nombre</label>
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
                <label htmlFor="exampleInputEmail1">Apellido</label>
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
                <label htmlFor="exampleInputEmail1">Usuario</label>
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
                <label htmlFor="exampleInputEmail1">Correo Electrónico</label>
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
                <label htmlFor="exampleInputPassword1">Contraseña</label>
                <input
                  type="password"
                  value={this.state.contraseña}
                  onChange={this.handleChange}
                  className="form-control"
                  name="contraseña"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="CPassword"
                />
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
                <button onClick={()=> this.crearUsuario()} type="submit" className="btn btn-sm btn-success m-1">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
