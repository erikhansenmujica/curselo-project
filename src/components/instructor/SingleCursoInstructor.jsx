import React from "react";
import { Link } from "react-router-dom";

const styles = {
  nav: {
    width:"80vw"
  },
  button: {
    display: "inline",
    marginLeft: "90%"
    // marginTop:"auto"
  }
};

export default props => (
  <div style={{  
    marginLeft:"10%",
    marginTop:"3%"}}>
    {props.curso && (
      <div >
        <div className="media">
          <div className="media-body">
            <h5 className="mt-0">Curso: {props.curso.name}</h5>
          </div>
        </div>
        <div className="card" style={styles.nav}>
          <div className="card-header">Seccion:</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Tema: </li>
          </ul>
        </div>
      </div>
    )}
  </div>
);
