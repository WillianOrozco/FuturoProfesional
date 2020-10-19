import React from "react";
import Logo from "../imagenes/LogoPPI.png";

export default class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col mb-3">
            <div class="fixed-top">
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a
                  class="navbar-brand"
                  href="https://futuroprofesional.vercel.app/"
                >
                  <img class="logo" src={Logo} alt="" />
                </a>

                <div class="collapse navbar-collapse" id="nav">
                  <ul class="navbar-nav bg-dark m-0 ml-lg-auto p-3 p-lg-0">
                    <li class="nav-item">
                      <a
                        id="TextNav"
                        class="nav-link text-truncate"
                        href="https://futuroprofesional.vercel.app/CreditosPage"
                      >
                        Créditos
                      </a>
                    </li>

                    <li class="nav-item">
                      <a
                        id="TextNav"
                        class="nav-link text-truncate"
                        href="#sedes"
                      >
                        Contactanos
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        id="TextNav"
                        class="nav-link text-truncate"
                        href="#sedes"
                      >
                        ¿Qué es FuturoProfesional?
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        id="TextNav"
                        className="nav-link"
                        href={this.props.link}
                      >
                        {this.props.boton}
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div
                className="card p-2 border-top bg-dark text-white rounded-bottom collapse"
                id="futuroProfesional"
              >
                Futuro Profesional es una página web que tiene como objetivo dar
                al usuario una guía que pueda reforzar sus pensamientos a la
                hora de elegir una carrera profesional, brindando una serie de
                descripciones y carreras profesionales para el usuario, a través
                de un test realizado en la misma página.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// {/* <nav className="navbar navbar-dark bg-dark justify-content-between">
//   <div className="contenedorLogo">
//     <a href="https://futuroprofesional.vercel.app/">
//       <img
//         src={Logo}
//         className="img-fluid"
//         alt="FuturoProfesional"
//       />
//     </a>
//   </div>
//   <button
//     className="navbar-toggler"
//     type="button"
//     data-toggle="collapse"
//     data-target="#collapseExample"
//     aria-expanded="false"
//     aria-controls="collapseExample"
//   >
//     <span class="navbar-toggler-icon"></span>
//   </button>
// </nav> */}

// {/* <div className="collapse" id="collapseExample">
//   <ul className="list-group">
//     <li className="list-group-item rounded-0 active">
//       <a
//         className="text-white text-decoration-none"
//         data-toggle="collapse"
//         href="#futuroProfesional"
//         role="button"
//         aria-expanded="false"
//         aria-controls="collapseExample"
//       >
//         ¿Qué es FuturoProfesional?
//       </a>
//     </li>
//     <li className="list-group-item">
//       <a className="text-decoration-none" href={this.props.link}>
//         {this.props.boton}
//       </a>
//     </li>
//   </ul>
// </div> */}

//  <div
//   className="card p-2 border-top bg-dark text-white rounded-bottom collapse"
//   id="futuroProfesional">
//   Futuro Profesional es una página web que tiene como objetivo dar
//   al usuario una guía que pueda reforzar sus pensamientos a la
//   hora de elegir una carrera profesional, brindando una serie de
//   descripciones y carreras profesionales para el usuario, a través
//   de un test realizado en la misma página.
// </div>

//               </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
