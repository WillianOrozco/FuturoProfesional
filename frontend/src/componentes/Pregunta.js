import React from "react";

export default class Main extends React.Component {
  render() {
    const { preg } = this.props;
    return (
      <div className="card container my-3">
        <div className="card-header text-center">
          <strong>Pregunta #{preg.id}</strong>
        </div>
        <div className="card-body">
          <h6>{preg.pregunta}</h6>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={preg.grupo}
              id="exampleRadios1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              {preg.opcion1}
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={preg.grupo}
              id="exampleRadios2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              {preg.opcion2}
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={preg.grupo}
              id="exampleRadios3"
              value="option3"
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              {preg.opcion3}
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={preg.grupo}
              id="exampleRadios4"
              value="option4"
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              {preg.opcion4}
            </label>
          </div>
        </div>
      </div>
    );
  }
}
