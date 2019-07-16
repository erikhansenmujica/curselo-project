import React from "react";
import { Link } from "react-router-dom";
import TopicsContainer from "../../containers/instructor/TopicsContainer";

const styles = {
  nav: {
    width: "80vw"
  },
  button: {
    display: "inline",
    marginLeft: "90%"
    // marginTop:"auto"
  }
};

export default props => (
  <div>
    {props.secciones && props.secciones[0] ? (
      props.secciones.map(sec => (
        <div className="card" key={sec.id} style={styles.nav}>
          <div className="card-header">Seccion: {sec.name}</div>
          <ul className="list-group list-group-flush">
            <TopicsContainer secId={sec.id} />
          </ul>
        </div>
      ))
    ) : (
      <div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )}
  </div>
);
