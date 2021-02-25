import React, { Component } from "react";
import DetalleNotas from "../detalleNotas";
import "./estilo.css";

class ListaNotas extends Component {

  render() {
    return (
      <ul className="lista-notas">
        {Array.of("React", "Oracle", "Java").map((curso, indice) => {
          return (
            <li className="lista-notas_item" key={indice}>
              <div>{curso}</div>
              <DetalleNotas />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaNotas;
