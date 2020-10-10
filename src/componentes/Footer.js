import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col mt-3">
            <div className="fixed-bottom">
              <div class="card-footer d-flex text-white rounded-0 justify-content-between bg-dark px-5">
                <a className="text-decoration-none" href="#popis">
                  Créditos
                </a>
                <a className="text-decoration-none" href="#popis">
                  Contáctanos
                </a>
                <a className="text-decoration-none" href="#popis">
                  Colombia
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
