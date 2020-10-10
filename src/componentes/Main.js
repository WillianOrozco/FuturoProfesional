import React from "react";
import Facebook from "../imagenes/Facebook.png";
import Google from "../imagenes/Google.png";
import Twitter from "../imagenes/Twitter.png";

export default class Main extends React.Component {
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
              <form className="container tamañoMaximo py-3 bg-dark rounded text-white">
                <h4 className="text-center pb-3 w-100 border-bottom">
                  Ingresa Ya!
                </h4>
                <div class="form-group">
                  <label for="exampleInputEmail1">Usuario o Correo</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
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
                    <a
                      href="https://futuro-profesional.vercel.app/Cuenta"
                      type="submit"
                      class="btn btn-sm btn-success m-1"
                    >
                      Submit
                    </a>
                  </div>
                </div>
              </form>
              <form
                className="container mt-1 p-2 rounded bg-dark text-white collapse"
                id="olvidasteTuContraseña"
              >
                <div class="form-group">
                  <label for="exampleInputEmail1">Correo Electrónico</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="ejemplo@gmail.com"
                  />
                  <small>Escribe tu correo electrónico.</small>
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" class="btn btn-sm btn-success m-1">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
