import React from "react";
import Pregunta from "./Pregunta";

export default class Main extends React.Component {
  render() {
    const Pregunta1 = {
      id: 1,
      pregunta: "¿De los siguientes pasatiempos cual elegirías?",
      opcion1: "Jugar videojuegos en mi PC o Play Station",
      opcion2: "Explorar algún lugar con naturaleza",
      opcion3: "Leer cualquier tipo de artículo de mi gusto",
      opcion4: "Juegos de mesa o que requieran pensamiento",
      grupo: "Pregunta1",
    };

    const Pregunta2 = {
      id: 2,
      pregunta: "¿Como te consideras??",
      opcion1: "Sociable",
      opcion2: "Solitario",
      opcion3: "Me da igual",
      opcion4: "Un poco de ambas",
      grupo: "Pregunta2",
    };

    const Pregunta3 = {
      id: 3,
      pregunta: "¿Lees con frecuencia?",
      opcion1: "Muy seguido",
      opcion2: "A veces",
      opcion3: "Solo cuando debo hacerlo",
      opcion4: "Nunca",
      grupo: "Pregunta3",
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col my-5 py-5">
            <h4 className="text-white text-center">Responde las preguntas de acuerdo a tu personalidad y con toda sinceridad.</h4>
            <p className="text-white text-center">Si deseas cancelar este test, dirígete al boton de cancelar al final de la pantalla.</p>
            <Pregunta preg={Pregunta1} />
            <Pregunta preg={Pregunta2} />
            <Pregunta preg={Pregunta3} />
            <div className="d-flex justify-content-between">
              <a
                href="http://localhost:3000/Cuenta"
                type="submit"
                class="btn btn-sm btn-success m-1"
              >
                Cancel
              </a>
              <a
                href="http://localhost:3000/Resultado"
                type="submit"
                class="btn btn-sm btn-success m-1"
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
