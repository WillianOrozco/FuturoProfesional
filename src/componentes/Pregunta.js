import React from "react";

export default class Main extends React.Component {
  render() {
    const {preg} = this.props;
    return (
      <div class="card container my-3">
        <div class="card-header text-center"><strong>Pregunta #{preg.id}</strong></div>
        <div class="card-body">
          <h6>{preg.pregunta}</h6>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name={preg.grupo}
              id="exampleRadios1"
              value="option1"
            />
            <label class="form-check-label" for="exampleRadios1">
            {preg.opcion1}
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name={preg.grupo}
              id="exampleRadios2"
              value="option2"
            />
            <label class="form-check-label" for="exampleRadios1">
            {preg.opcion2}
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name={preg.grupo}
              id="exampleRadios3"
              value="option3"
            />
            <label class="form-check-label" for="exampleRadios1">
            {preg.opcion3}
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name={preg.grupo}
              id="exampleRadios4"
              value="option4"
            />
            <label class="form-check-label" for="exampleRadios1">
            {preg.opcion4}
            </label>
          </div>
        </div>
      </div>
    );
  }
}
