import React from "react";
import { Link } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  child: {
    margin: "auto",
    marginTop: "25%",
    paddingLeft: "20%"
  },
  child1: {
    margin: "auto",
    marginTop: "25%",
    paddingRight: "20%"
  }
};

export default props => (
  <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <div className="container" style={styles.container}>
      <div style={styles.child}>
        <button onClick={props.googleLogin} className="btn btn-lg btn-primary">
          Quiero enseñar!
        </button>
      </div>
      <div style={styles.child1}>
        <button onClick={props.setAlumno} className="btn btn-lg btn-primary">
          Quiero aprender!
        </button>
      </div>
    </div>
  </div>
);
