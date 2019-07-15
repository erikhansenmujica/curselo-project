import React, { Component } from "react";
import SingleCursoInstructor from "../../components/instructor/SingleCursoInstructor";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class SingleCursoInstructorContainer extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log("SOY EL CURSO EN EL CONT", this.props);
    return (
      <SingleCursoInstructor
        curso={this.props.cursos && this.props.cursos[0]}
      />
    );
  }
}

export default compose(
  firestoreConnect(props => [
    { collection: "cursos", doc: props.match.params.cursoId }
  ]),
  connect(({ firestore: { ordered } }) => {
    return {
      cursos: ordered.cursos
    };
  })
)(SingleCursoInstructorContainer);
