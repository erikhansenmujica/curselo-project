import React from "react";
import { Link } from "react-router-dom";
import TopicsContainer from "../../containers/instructor/TopicsContainer";

const styles = {
  nav: {
    width: "80vw"
  },
  button: {
   float:"right"
  }
};

export default props => (
  <div>
    {props.secciones && props.secciones[0] ? (
      props.secciones.map(sec => (
        <div className="card" key={sec.id} style={styles.nav}>
          <div className="card-header">Section: {sec.name}
          <button type="button" className="btn btn-light" style={styles.button}>Add Topic</button>
          </div>
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
