import React from "react";
import { Link } from "react-router-dom";
const styles = {
  buttonLeft: {
    marginLeft:"2%",
  },
  buttonRigth:{
    marginRigth:"30%"
  },
  div: {
    marginTop: "20%"
  }
};

export default () => (
  <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <div className="container">
      <Link to="/crear">
        <button  style = {styles.buttonRigth} className="btn btn-lg btn-primary">
          Quiero enseñar!
        </button>
      </Link>
      <Link to="/cursos">
        <button
          style={styles.buttonRigth}
          className="btn btn-lg btn-primary"
        >
          Quiero aprender!
        </button>
      </Link>
    </div>
  </div>
);
