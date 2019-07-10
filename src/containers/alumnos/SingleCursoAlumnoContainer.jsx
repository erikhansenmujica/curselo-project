import React, { Component } from "react";
import { firebase } from "../../config/app";
import SingleCursoAlumno from "../../components/alumnos/SingleCursoAlumno";

export default class SingleCursoAlumnoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursoId: ""
    };
  }

  render() {
    return <SingleCursoAlumno />;
  }
}
