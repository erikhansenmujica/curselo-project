import React from "react";
import SeccionesAlumnoContainer from "../../containers/alumnos/SeccionesAlumnoContainer";

const styles = {
  wrapper: {
    display: "flex",
    width: "100%"
  },
  sidebar: {
    marginTop: "81px",
    width: "260px",
    position: " fixed",
    top: "0",
    left: "0",
    height: "100vh",
    zIndex: "999",
    background: "#CEDEEA",
    color: "#fff",
    transition: "all 0.3s"
  },
  text: {
    color: "black",
    margin: "10px"
  },
 
};

export default (props) => (
  <div className="wrapper" style={styles.wrapper}>
    <nav id="sidebar" style={styles.sidebar}>
      <div >
        <div>
          <center>
            <h5 style={styles.text}>Secciones:</h5>
          </center>
        </div>
        <br />
        <SeccionesAlumnoContainer cursoId={props.cursoId} history={props.history}/>
      </div>
    </nav>
  </div>
);
