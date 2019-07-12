import React from "react";
import { Link } from "react-router-dom";

const container = {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-evenly"
};

const button = {
  float: "right"
};
export default props => (
  <div style={container}>
    {props.curso && (
      <div>
        <h3> {props.curso.titulo} </h3>
        <h3> {props.curso.descripcion}</h3>
        <h3> {props.curso.contenido}</h3>
        <h3> {props.curso.precio}</h3>

        <div style={button} className="btn btn-primary">
          Crear Nueva Seccion
        </div>

        <div style={button} className="btn btn-primary">
          Crear Nueva Clase
        </div>
      </div>
    )}
  </div>
);
