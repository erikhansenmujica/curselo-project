import React from "react";
import { Link } from "react-router-dom";

const styles = {
  nav: {
    width: "100%",
    marginLeft: "3%"
  },
  button: {
    display:"inline",
    marginLeft: "90%"
    // marginTop:"auto"
  }
};

export default props => (
  <div>
    {props.curso && (
      <div>
        <div className="card" style={styles.nav}>
          <div className="card-body">
            <h5 className="card-title">{props.curso.titulo}</h5>
            <button className="btn btn-primary" style={styles.button}>
              Nueva Seccion
            </button>
          </div>
        </div>

        {/* <h3> {props.curso.titulo} </h3>
        <h3> {props.curso.descripcion}</h3>
        <h3> {props.curso.contenido}</h3>
        <h3> {props.curso.precio}</h3>

        <div style={button} className="btn btn-primary">
          Crear Nueva Seccion
        </div>

        <div style={button} className="btn btn-primary">
          Crear Nueva Clase
        </div> */}
      </div>
    )}
  </div>
);
