import React from "react";
import Foto from "../imagenes/FotoPerfil.jpg";
import FlechaAtras from "../imagenes/FlechaAtras.png";
import Info from "../imagenes/Info.png";

export default class ResultadosAct extends React.Component {
  render() {
    const { dts } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col my-5 py-5">
            <nav class="navbar p-0 w-100 bg-transparent">
              <a href="./Cuenta">
                <img src={FlechaAtras} width="38" alt="Atrás" />
              </a>
              <h5 className="text-center text-white py-2">
                Test {dts.map((x) => x.Test)}
              </h5>
              <img src={Info} width="35" Alt="Info" />
            </nav>
            <div className="d-flex justify-content-center">
              <img
                src={Foto}
                alt="Foto de Perfil"
                className="rounded-circle"
                width="150"
              />
            </div>
            <h5 className="text-center text-white mb-5">Willian Orozco</h5>
            <div className="container">
              <div className="text-white p-3 border rounded">
                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="w-100 text-center page-item active">
                      <a
                        class="page-link"
                        data-toggle="collapse"
                        data-target=".multi-collapse"
                        aria-expanded="true"
                        aria-controls="multiCollapseExample1 multiCollapseExample2"
                      >
                        Descriptivo
                      </a>
                    </li>
                    <li class="w-100 text-center page-item">
                      <a
                        class="page-link"
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
                  {dts.map((x) => x.Descriptivo)}
                </div>
                <div className="collapse multi-collapse">
                  {dts.map((x) => x.Profesional)}
                  <br />
                  {dts.map((x) => x.Carreras)}
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <a
                  href="./Cuenta"
                  type="submit"
                  class="btn btn-sm btn-success m-1"
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
