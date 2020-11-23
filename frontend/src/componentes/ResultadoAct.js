import React from "react";
import Foto from "../imagenes/FotoPerfil.jpg";
import FlechaAtras from "../imagenes/FlechaAtras.png";
import Info from "../imagenes/Info.png";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default class ResultadosAct extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col my-5 py-5">
            <nav className="navbar p-0 w-100 bg-transparent">
              <a href="./Cuenta">
                <img src={FlechaAtras} width="38" alt="Atrás" />
              </a>
              <h5 className="text-center text-white py-2">
                Test {cookies.get("id_test")}
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
            <h5 className="text-center text-white mb-5">
              {cookies.get("nombre") + " " + cookies.get("apellido")}
            </h5>
            <div className="container">
              <div className="text-white p-3 border rounded">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="w-100 text-center page-item active">
                      <a
                        className="page-link"
                        data-toggle="collapse"
                        data-target=".multi-collapse"
                        aria-expanded="true"
                        aria-controls="multiCollapseExample1 multiCollapseExample2"
                      >
                        Descriptivo
                      </a>
                    </li>
                    <li className="w-100 text-center page-item">
                      <a
                        className="page-link"
                        data-toggle="collapse"
                        data-target=".multi-collapse"
                        aria-expanded="false"
                        aria-controls="multiCollapseExample1 multiCollapseExample2"
                      >
                        Profesional
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="collapse show multi-collapse">
                  {cookies.get("Desc")}
                </div>
                <div className="collapse multi-collapse">
                  <p>
                    Con base en los resultados de tu test, hemos concluido que
                    te pueden gustar las siguientes profesiones:
                  </p>
                  {cookies.get("Prof")}
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <a
                  href="https://futuroprofesional.vercel.app/Cuenta"
                  type="submit"
                  className="btn btn-sm btn-success m-1"
                >
                  Terminar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
