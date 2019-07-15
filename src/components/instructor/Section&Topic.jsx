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
    <div className="card" style={styles.nav}>
    <div className="card-header">Seccion:</div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Tema: </li>
    </ul>
  </div>
);