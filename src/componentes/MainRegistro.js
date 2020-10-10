import React from "react";
import Facebook from "../imagenes/Facebook.png";
import Google from "../imagenes/Google.png";
import Twitter from "../imagenes/Twitter.png";

export default class MainRegistro extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col my-5 py-5">
            <form className="container tamañoMaximo py-3 bg-dark rounded text-white">
              <h4 className="text-center pb-3 w-100 border-bottom">
                Regístrate Ya!
              </h4>
              <div class="form-group">
                <label for="exampleInputEmail1">Nombre Completo</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="David Jesús Correa Castillo"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Usuario</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail2"
                  aria-describedby="emailHelp"
                  placeholder="DavidJCC15"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Correo Electrónico</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail3"
                  aria-describedby="emailHelp"
                  placeholder="ejemplo@gmail.com"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Contraseña</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Confirmar Contraseña</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword2"
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
                <a href="https://futuro-profesional.vercel.app/" type="submit" class="btn btn-sm btn-success m-1">
                  Submit
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
