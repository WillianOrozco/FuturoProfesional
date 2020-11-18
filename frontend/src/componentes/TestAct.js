import React from "react";
import Pregunta from "./Pregunta";
import pr from "../server/preguntas.json";

export default class Main extends React.Component {
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
            {pr.preguntas.map(x=><div><Pregunta preg={x} /></div>)}
            
            <div className="d-flex justify-content-between">
              <a
                href="./Cuenta"
                type="submit"
                className="btn btn-sm btn-success m-1"
              >
                Cancel
              </a>
              <a
                href="./Resultado"
                type="submit"
                className="btn btn-sm btn-success m-1"
              >
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
