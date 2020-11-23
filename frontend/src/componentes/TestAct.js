import React from "react";
import Cookies from "universal-cookie";
import Test from "../server/test.json";
import pr from "../server/preguntas.json";
import Axios from "axios";

const cookies = new Cookies();
const f = new Date();
const url = "https://ftp-backend.herokuapp.com/tests";
const fecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();

export default class Main extends React.Component {
  resultadoTest = () => {
    var A = 0;
    var B = 0;
    var C = 0;
    var D = 0;
    var E = 0;
    for (var i = 1; i <= 25; i++) {
      var elementos = document.getElementsByName("Pregunta" + i);
      for (var x = 0; x < elementos.length; x++) {
        if (elementos[x].checked === true) {
          var z = elementos[x].value;
          if (z == 5) {
            E++;
          } else if (z == 4) {
            D++;
          } else if (z == 3) {
            C++;
          } else if (z == 2) {
            B++;
          } else if (z == 1) {
            A++;
          }
        }
      }
    }
    if (A + B + C + D + E !== 25) {
      document.getElementById("Mensaje").style.display = "block";
    } else {
      document.getElementById("Mensaje").style.display = "none";
      if (A > B && A > C && A > D && A > E) {
        cookies.set("Desc", Test.resultadoA.descripcion, { path: "/" });
        cookies.set("Prof", Test.resultadoA.profesiones, { path: "/" });
      } else if (B > A && B > C && B > D && B > E) {
        cookies.set("Desc", Test.resultadoB.descripcion, { path: "/" });
        cookies.set("Prof", Test.resultadoB.profesiones, { path: "/" });
      } else if (C > B && C > A && C > D && C > E) {
        cookies.set("Desc", Test.resultadoC.descripcion, { path: "/" });
        cookies.set("Prof", Test.resultadoC.profesiones, { path: "/" });
      } else if (D > B && D > C && D > A && D > E) {
        cookies.set("Desc", Test.resultadoD.descripcion, { path: "/" });
        cookies.set("Prof", Test.resultadoD.profesiones, { path: "/" });
      } else if (E > B && E > C && E > D && E > A) {
        cookies.set("Desc", Test.resultadoE.descripcion, { path: "/" });
        cookies.set("Prof", Test.resultadoE.profesiones, { path: "/" });
      } else if (A == B && B > C && B > D && B > E) {
        cookies.set("Desc", Test.resultadoB.descripcion, { path: "/" });
        cookies.set("Prof", Test.resultadoB.profesiones, { path: "/" });
      } else if (A == C && C > D && C > E && C > B) {
        cookies.set("Desc", Test.resultadoC.descripcion, { path: "/" });
        cookies.set("Prof", Test.resultadoC.profesiones, { path: "/" });
      } else if (A == D && D > B && D > C && D > E) {
        cookies.set("Desc", Test.resultadoD.descripcion, { path: "/" });
        cookies.set("Prof", Test.resultadoD.profesiones, { path: "/" });
      } else if (A == E && E > B && E > C && E > D) {
        cookies.set("Desc", Test.resultadoE.descripcion, { path: "/" });
        cookies.set("Prof", Test.resultadoE.profesiones, { path: "/" });
      } else if (B == C && C > A && C > D && C > E) {
        cookies.set("Desc", Test.resultadoC.descripcion, { path: "/" });
        cookies.set("Prof", Test.resultadoC.profesiones, { path: "/" });
      } else if (B == D && D > A && D > C && D > E) {
        cookies.set("Desc", Test.resultadoB.descripcion, { path: "/" });
        cookies.set("Prof", Test.resultadoB.profesiones, { path: "/" });
      } else if (B == E && E > A && E > C && E > D) {
        cookies.set("Desc", Test.resultadoE.descripcion, { path: "/" });
        cookies.set("Prof", Test.resultadoE.profesiones, { path: "/" });
      } else if (C == D && D > A && D > B && D > E) {
        cookies.set("Desc", Test.resultadoD.descripcion, { path: "/" });
        cookies.set("Prof", Test.resultadoD.profesiones, { path: "/" });
      } else if (C == E && E > A && E > B && E > D) {
        cookies.set("Desc", Test.resultadoE.descripcion, { path: "/" });
        cookies.set("Prof", Test.resultadoE.profesiones, { path: "/" });
      } else if (D == E && E > A && E > B && E > C) {
        cookies.set("Desc", Test.resultadoD.descripcion, { path: "/" });
        cookies.set("Prof", Test.resultadoD.profesiones, { path: "/" });
      }
      Axios.post(url, {
        id_usuario: cookies.get("id"),
        descripcion: cookies.get("Desc"),
        profesion: cookies.get("Prof"),
        fecha: fecha,
      }).then(() => {
        window.location.href = "https://futuroprofesional.vercel.app/Resultado";
      });
    }
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col my-5 py-5">
            <h4 className="text-white text-center">
              Responde las preguntas de acuerdo a tu personalidad y con toda
              sinceridad.
            </h4>
            <p className="text-white text-center">
              Si deseas cancelar este test, dirígete al boton de cancelar al
              final de la pantalla.
            </p>
            {pr.preguntas.map((x) => (
              <div key={x.id}>
                <div className="card container my-3">
                  <div className="card-header text-center">
                    <strong>Pregunta #{x.id}</strong>
                  </div>
                  <div className="card-body">
                    <h6>{x.pregunta}</h6>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={x.grupo}
                        id="exampleRadios1"
                        value={1}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {x.opcA}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={x.grupo}
                        id="exampleRadios2"
                        value={2}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {x.opcB}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={x.grupo}
                        id="exampleRadios3"
                        value={3}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {x.opcC}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={x.grupo}
                        id="exampleRadios4"
                        value={4}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {x.opcD}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={x.grupo}
                        id="exampleRadios5"
                        value={5}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {x.opcE}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <p id="Mensaje" className="mensajeOculto">
                Faltan preguntas por responder
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <a
                href="https://futuroprofesional.vercel.app/Cuenta"
                type="submit"
                className="btn btn-sm btn-success m-1"
              >
                Cancel
              </a>
              <button
                onClick={() => this.resultadoTest()}
                type="submit"
                className="btn btn-sm btn-success m-1"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
