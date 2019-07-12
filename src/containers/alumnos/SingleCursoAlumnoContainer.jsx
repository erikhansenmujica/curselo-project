import React, { Component } from "react";
import SingleCursoAlumno from "../../components/alumnos/SingleCursoAlumno";
import { connect } from "react-redux";
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
 class SingleCursoAlumnoContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <SingleCursoAlumno curso={this.props.curso[0]}/>;
  }
}

export default compose(
  firestoreConnect((props)=>[
    { collection: 'cursos', doc:props.match.params.cursoId }
  ]),
  connect(({ firestore: { ordered } }) => ({
    curso: ordered.cursos
  }))
)(SingleCursoAlumnoContainer)
